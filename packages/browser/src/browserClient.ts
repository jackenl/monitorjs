import { BaseClient, Breadcrumb } from '@monitorjs/core'
import { BrowserOptionsFieldsType } from './types'
import { EventTypes } from '@monitorjs/shared'
import { BrowserOptions } from './browserOptions'
import { BrowserTransport } from './browserTransport'

export class BrowserClient extends BaseClient<
  BrowserOptionsFieldsType,
  EventTypes
> {
  options: BrowserOptions
  transport: BrowserTransport
  breadcrumb: Breadcrumb
  constructor(options: BrowserOptionsFieldsType) {
    super(options)
    this.options = new BrowserOptions(options)
    this.transport = new BrowserTransport(options)
    this.breadcrumb = new Breadcrumb(options)
  }
}
