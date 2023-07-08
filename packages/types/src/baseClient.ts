import { BaseOptionsFieldsType } from './baseOptions'

export interface BaseClientType<
  O extends BaseOptionsFieldsType = BaseOptionsFieldsType,
> {
  getOptions(): O
}
