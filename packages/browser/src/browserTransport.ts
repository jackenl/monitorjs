import { BaseTransport } from '@monitorjs/core'
import { BrowserOptionsFieldsType } from './types'

export class BrowserTransport extends BaseTransport<BrowserOptionsFieldsType> {
  constructor(options: BrowserOptionsFieldsType) {
    super(options)
  }

  bindOptions(options: BrowserOptionsFieldsType) {}
}
