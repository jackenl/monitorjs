import { EventTypes } from '@monitorjs/shared'
import { BaseClientType } from './baseClient'

export interface BasePluginType<
  T extends EventTypes = EventTypes,
  C extends BaseClientType = BaseClientType,
> {
  name: T
  monitor: (this: C, notify: (eventName: T, data: any) => void) => void
  transform?: (this: C, collectedData: any) => any
}
