import { getFunctionName, logger } from '@monitorjs/utils'

type MonitorCallback = (data: any) => void

export class Subscribe<T = string> {
  private dep: Map<T, MonitorCallback[]> = new Map()
  constructor() {}
  watch(eventName: T, callback: (data: any) => any) {
    const fns = this.dep.get(eventName)
    if (fns) {
      this.dep.set(eventName, fns.concat(callback))
      return
    }
    this.dep.set(eventName, [callback])
  }
  notify<D = any>(eventName: T, data: D) {
    const fns = this.dep.get(eventName)
    if (!eventName || !fns) return
    fns.forEach((fn) => {
      try {
        fn(data)
      } catch (e) {
        logger.error(
          `Subscribe callback function execute failed\neventName :${eventName}\nfunctionName :${getFunctionName(
            fn,
          )}\nError: ${e}`,
        )
      }
    })
  }
}
