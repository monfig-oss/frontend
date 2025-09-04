<script setup lang="ts">
const githubUrl = 'https://github.com/monfig-oss'
</script>

<template>
    <div class="flex flex-col min-h-screen bg-gradient-to-br from-primary/10 via-white to-secondary/10">
        <!-- Hero Section -->
        <section class="flex flex-col items-center justify-center py-16 px-6 text-center">
            <img src="https://i.imgur.com/L0v4vUo.png" alt="Monfig Banner" class="w-204 mb-6 rounded-xl shadow-lg select-none" />
            <h1 class="text-4xl font-extrabold text-gray-900 mb-4 drop-shadow">Welcome to Monfig Dashboard</h1>
            <p class="text-lg text-gray-700 mb-6 max-w-xl mx-auto">
                Monfig is your open-source configuration management system. Effortlessly manage, share, and deploy configs for any project.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                    :href="githubUrl"
                    target="_blank"
                    class="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md font-semibold hover:bg-secondary transition-colors duration-300 shadow"
                >
                    <Icon name="iconoir:github" class="mr-2 text-lg" />
                    Check it out on GitHub
                </a>
                <a
                    href="/login"
                    class="inline-flex items-center px-5 py-3 bg-gray-700 text-white rounded-md font-medium hover:bg-gray-800 transition-colors duration-300 shadow"
                >
                    <Icon name="iconoir:log-in" class="mr-2 text-lg" />
                    Login to Dashboard
                </a>
            </div>
        </section>

        <!-- Footer Section -->
        <footer class="mt-auto py-6 bg-gray-50 border-gray-200 border-t">
            <div class="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6">
                <p class="text-gray-500 text-sm">&copy; 2025 Monfig. All rights reserved.</p>
                <div class="flex gap-4 mt-2 sm:mt-0">
                    <a :href="githubUrl" target="_blank" class="text-gray-600 hover:text-primary">
                        <Icon name="iconoir:github" class="text-xl" />
                    </a>
                    <a href="mailto:f3dox@proton.me" class="text-gray-600 hover:text-primary">
                        <Icon name="iconoir:mail" class="text-xl" />
                    </a>
                </div>
            </div>
        </footer>
    </div>
</template>
