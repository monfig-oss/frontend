export interface ApiResponse<T = any> {
    success: boolean
    data: T | null
    errors: Record<string, any>
    statusCode: number,
    meta?: Record<string, any>
}

export interface ApiError {
    message: string
    statusCode: number
    errors: Record<string, any>
}

export interface ApiOptions {
    method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
    body?: any
    headers?: Record<string, string>
    timeout?: number
}
