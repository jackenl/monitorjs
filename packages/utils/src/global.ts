export const isBrowser =
  typeof window === 'object' &&
  typeof document === 'object' &&
  document.nodeType === 9

interface GlobalThis {
  console?: Console
}

export function getGlobal<T>() {
  if (isBrowser) return window as unknown as GlobalThis & T
  return window as unknown as GlobalThis & T
}

const _global = getGlobal<Window>()

export { _global }
