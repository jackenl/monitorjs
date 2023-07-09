import { BaseOptionsFieldsType, BaseOptionsType } from '@monitorjs/types'

export class BaseOptions<
  O extends BaseOptionsFieldsType = BaseOptionsFieldsType,
> implements BaseOptionsType
{
  constructor(options: O) {
    this.bindOptions(options)
  }

  bindOptions(options: O): void {}
}
