import { localStorageService } from './service'

const TOKEN_KEY = 'auth'

export const tokenStorage = {
  setToken(token: string): void {
    localStorageService.set(TOKEN_KEY, token)
  },

  getToken(): string | null {
    const token = localStorageService.get(TOKEN_KEY)

    return token ? token?.replace(/"/g, '') : null
  },

  removeToken(): void {
    localStorageService.remove(TOKEN_KEY)
  }
}
