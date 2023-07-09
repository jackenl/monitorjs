import { BaseOptions } from '@monitorjs/core'
import { BrowserOptionsFieldsType } from './types'

export class BrowserOptions extends BaseOptions<BrowserOptionsFieldsType> {
  // FIXME: remove property
  enabled = true
  constructor(options: BrowserOptionsFieldsType) {
    super(options)
  }

  bindOptions(options: BrowserOptionsFieldsType): void {}
}
