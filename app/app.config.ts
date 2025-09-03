export interface MonfigConfig {
    title?: string;
    name?: string;
}

declare module '@nuxt/schema' {
    interface AppConfigInput {
        app?: MonfigConfig;
    }
}

export default defineAppConfig({
    app: {
        title: 'Monfig',
        name: 'Monfig',
    } as MonfigConfig
});