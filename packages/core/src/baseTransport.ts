import { BaseOptionsFieldsType, BaseTransportType } from '@monitorjs/types'
import { Queue } from '@monitorjs/utils'

export abstract class BaseTransport<
  O extends BaseOptionsFieldsType = BaseOptionsFieldsType,
> implements BaseTransportType
{
  private readonly queue: Queue
  constructor(options: O) {
    this.queue = new Queue()
  }

  send(data: any): void {}
}
