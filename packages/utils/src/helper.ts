import { variableTypeDetection } from './variable'

export const defaultFunctionName = '<anonymous>'

export function getFunctionName(fn: any): string {
  if (!fn || !variableTypeDetection.isFunction(fn)) {
    return defaultFunctionName
  }
  return fn.name || defaultFunctionName
}

export function getTimestamp(): number {
  return Date.now()
}
