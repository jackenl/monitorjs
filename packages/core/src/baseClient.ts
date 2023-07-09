import { EventTypes } from '@monitorjs/shared'
import {
  BaseClientType,
  BaseOptionsFieldsType,
  BasePluginType,
} from '@monitorjs/types'
import { logger } from '@monitorjs/utils'
import { Subscribe } from './subscribe'

export abstract class BaseClient<
  O extends BaseOptionsFieldsType = BaseOptionsFieldsType,
  E extends EventTypes = EventTypes,
> implements BaseClientType
{
  options: BaseOptionsFieldsType
  constructor(options: O) {
    this.options = options
    logger.bindOptions(options.debug)
  }

  getOptions() {
    return this.options
  }

  use(plugins: BasePluginType<E>[]) {
    if (!this.options.enabled) return
    const subscribe = new Subscribe<E>()
    for (const plugin of plugins) {
      plugin.monitor.call(this, subscribe.notify.bind(subscribe, plugin.name))
      const callback = (...args: any) => {
        const data = plugin.transform?.apply(this, args)
        if (!data) {
          return
        }
      }
      subscribe.watch(plugin.name, callback)
    }
  }
}
