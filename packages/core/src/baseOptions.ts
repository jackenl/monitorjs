import { BaseOptionsFieldsType, BaseOptionsType } from '@monitorjs/types'

export class BaseOptions<
  O extends BaseOptionsFieldsType = BaseOptionsFieldsType,
> implements BaseOptionsType
{
  constructor() {}
  bindOptions(options: O): void {}
}
