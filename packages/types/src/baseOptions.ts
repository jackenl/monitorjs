export interface BaseOptionsType<
  O extends BaseOptionsFieldsType = BaseOptionsFieldsType,
> extends BaseOptionsFieldsType {
  bindOptions(options: O): void
}

export interface BaseOptionsFieldsType {
  dsn?: string
  debug?: boolean
  enabled?: boolean
  maxBreadcrumbs?: number
}
