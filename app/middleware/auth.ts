import { useUser } from "~/composables/useUser"

export default defineNuxtRouteMiddleware(async (to) => {
    const { isLoggedIn, validateToken } = useUser()

    if (!isLoggedIn.value) {
        return navigateTo("/login")
    }

    const isValid = await validateToken()
    if (!isValid) {
        return false
    }
})
