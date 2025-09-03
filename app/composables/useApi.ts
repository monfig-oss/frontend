import type { ApiOptions, ApiResponse } from "~/types/api";
import { useUser } from "~/composables/useUser"

export const useApi = () => {
    const config = useRuntimeConfig()
    const baseURL = config.public.apiBase
    const { token } = useUser()

    const apiCall = async <T = any>(
        endpoint: string,
        options: ApiOptions = {}
    ): Promise<ApiResponse<T>> => {
        const { method = "GET", body, headers = {}, timeout = 10000 } = options

        try {
            return await $fetch<ApiResponse<T>>(`${baseURL}${endpoint}`, {
                method,
                body,
                headers: {
                    "Content-Type": "application/json",
                    ...(token.value ? { Authorization: `Bearer ${token.value}` } : {}),
                    ...headers,
                },
                timeout,
            })
        } catch (error: any) {
            if (error.data && typeof error.data === "object") {
                return error.data as ApiResponse<T>
            }

            return {
                success: false,
                data: null,
                errors: {
                    network: error.message || "Network error occurred",
                },
                statusCode: error.statusCode || 500,
                meta: {},
            }
        }
    }

    const get = <T = any>(endpoint: string, headers?: Record<string, string>) =>
        apiCall<T>(endpoint, { method: "GET", headers })

    const post = <T = any>(endpoint: string, body?: any, headers?: Record<string, string>) =>
        apiCall<T>(endpoint, { method: "POST", body, headers })

    const put = <T = any>(endpoint: string, body?: any, headers?: Record<string, string>) =>
        apiCall<T>(endpoint, { method: "PUT", body, headers })

    const del = <T = any>(endpoint: string, headers?: Record<string, string>) =>
        apiCall<T>(endpoint, { method: "DELETE", headers })

    const patch = <T = any>(endpoint: string, body?: any, headers?: Record<string, string>) =>
        apiCall<T>(endpoint, { method: "PATCH", body, headers })

    return {
        apiCall,
        get,
        post,
        put,
        del,
        patch,
    }
}
