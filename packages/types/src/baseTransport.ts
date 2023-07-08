import { BaseOptionsFieldsType } from './baseOptions'

export interface BaseTransportType<
  O extends BaseOptionsFieldsType = BaseOptionsFieldsType,
> {
  send(data: any): void
}
