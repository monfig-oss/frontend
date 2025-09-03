export interface User {
    id?: string
    username: string
    globalRole: "user" | "manager" | "admin"
}