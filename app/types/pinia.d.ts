import 'pinia'

declare module 'pinia' {
  export interface DefineStoreOptionsBase<S, G, A> {
    persist?: boolean | Record<string, any>
  }
}