import { useUser } from "~/composables/useUser"

export default defineNuxtRouteMiddleware(() => {
    const { isLoggedIn, initializeUser } = useUser()

    if (process.client) {
        initializeUser()
    }

    if (isLoggedIn.value) {
        return navigateTo("/dashboard")
    }
})
