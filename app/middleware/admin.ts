import { useUser } from "~/composables/useUser"

export default defineNuxtRouteMiddleware(async (to) => {
    const { isLoggedIn, user } = useUser()

    if (!isLoggedIn.value) {
        return navigateTo("/login")
    }

    if (!(user.value?.globalRole === "admin")) {
        return navigateTo("/dashboard")
    }
})
