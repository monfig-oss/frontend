import 'pinia'

declare module 'pinia' {
  export interface DefineStoreOptions<S, G, A, Store> {
    persist?: boolean | object
  }
}
