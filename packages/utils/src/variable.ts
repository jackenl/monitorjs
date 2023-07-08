import { ToStringTypes } from '@monitorjs/shared'

export function getType(value: any): string {
  return Object.prototype.toString.call(value).slice(8, -1)
}

export function isType(type: string) {
  return (value: any): boolean => {
    return getType(value) === type
  }
}

export const variableTypeDetection = {
  isNumber: isType(ToStringTypes.Number),
  isString: isType(ToStringTypes.String),
  isBoolean: isType(ToStringTypes.Boolean),
  isNull: isType(ToStringTypes.Null),
  isUndefined: isType(ToStringTypes.Undefined),
  isSymbol: isType(ToStringTypes.Symbol),
  isFunction: isType(ToStringTypes.Function),
  isObject: isType(ToStringTypes.Object),
  isArray: isType(ToStringTypes.Array),
}

export function isObject(value: any): boolean {
  return typeof value === 'object' && value !== null
}

export function isError(value: any): boolean {
  if (!isObject(value)) {
    return false
  }
  const type = getType(value)
  return (
    type === 'Error' || type === 'DOMException' || isInstanceOf(value, Error)
  )
}

export function isInstanceOf(value: any, base: any): boolean {
  try {
    return value instanceof base
  } catch {
    return false
  }
}

export function isOwnProperty(obj: object, key: string) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}
