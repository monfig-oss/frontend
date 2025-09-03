import { computed, readonly } from "vue"
import { useApi } from "~/composables/useApi"

export interface User {
    username: string
    projectRoles: string[]
    globalRole: string
    token?: string
}

export interface LoginResponse {
    token: string
    username: string
    projectRoles: string[]
    globalRole: string
}

export const useUser = () => {
    const user = useState<User | null>("user", () => null)
    const token = useState<string | null>("token", () => null)
    const isLoggedIn = computed(() => !!user.value && !!token.value)

    const validateToken = async (): Promise<boolean> => {
        if (!token.value) return false
        try {
            const { get } = useApi()
            const response = await get("/api/v1/auth/validate", {
                Authorization: `Bearer ${token.value}`,
            })

            if (response.success && response.data) {
                if (response.data.username) {
                    user.value = {
                        username: response.data.username,
                        projectRoles: response.data.projectRoles || [],
                        globalRole: response.data.globalRole || 'user',
                        token: token.value,
                    }

                    if (process.client) {
                        localStorage.setItem("user_data", JSON.stringify(user.value))
                    }
                }
                return true
            } else {
                await logout()
                return false
            }
        } catch (error) {
            console.error("Token validation failed:", error)
            await logout()
            return false
        }
    }

    const login = async (username: string, password: string) => {
        try {
            const { post } = useApi()
            const response = await post<LoginResponse>("/api/v1/auth/login", {
                username,
                password,
            })

            if (response.success && response.data) {
                token.value = response.data.token
                user.value = {
                    username: response.data.username,
                    projectRoles: response.data.projectRoles || [],
                    globalRole: response.data.globalRole || 'user',
                    token: response.data.token,
                }

                if (process.client) {
                    localStorage.setItem("auth_token", response.data.token)
                    localStorage.setItem("user_data", JSON.stringify(user.value))
                }

                return { success: true, data: response.data }
            } else {
                return { success: false, errors: response.errors }
            }
        } catch (error) {
            console.error("Login failed:", error)
            return { success: false, errors: { general: "Login fehlgeschlagen" } }
        }
    }

    const logout = async () => {
        user.value = null
        token.value = null

        if (process.client) {
            localStorage.removeItem("auth_token")
            localStorage.removeItem("user_data")
        }

        await navigateTo("/login")
    }

    const initializeUser = () => {
        if (process.client) {
            const savedToken = localStorage.getItem("auth_token")
            const savedUser = localStorage.getItem("user_data")

            if (savedToken && savedUser) {
                try {
                    token.value = savedToken
                    user.value = JSON.parse(savedUser)
                } catch (error) {
                    console.error("Failed to parse saved user data:", error)
                    logout()
                }
            }
        }
    }

    const hasProjectRole = (role: string): boolean => {
        return user.value?.projectRoles.includes(role) ?? false
    }

    const hasGlobalRole = (role: string): boolean => {
        return user.value?.globalRole === role
    }

    const hasAnyProjectRole = (roles: string[]): boolean => {
        return roles.some((role) => hasProjectRole(role))
    }

    const hasAnyGlobalRole = (roles: string[]): boolean => {
        return roles.some((role) => hasGlobalRole(role))
    }

    return {
        user: readonly(user),
        token: readonly(token),
        isLoggedIn,
        login,
        logout,
        validateToken,
        initializeUser,
        hasProjectRole,
        hasGlobalRole,
        hasAnyProjectRole,
        hasAnyGlobalRole,
    }
}
