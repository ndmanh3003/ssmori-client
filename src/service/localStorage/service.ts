class LocalStorageService {
  set(key: string, value: unknown): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }

  get(key: string): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key)
    }

    return null
  }

  remove(key: string): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key)
    }
  }
}

export const localStorageService = new LocalStorageService()
