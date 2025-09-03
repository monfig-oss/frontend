import { useUser } from "~/composables/useUser"

export default defineNuxtPlugin(async () => {
    const {initializeUser, validateToken, isLoggedIn } = useUser()

    initializeUser()

    if (isLoggedIn.value) {
        await validateToken()
    }

    const router = useRouter()
    router.beforeEach(async (to) => {
        if (isLoggedIn.value && to.path !== "/login") {
            const isValid = await validateToken()
            if (!isValid) {
                return false
            }
        }
    })
})
