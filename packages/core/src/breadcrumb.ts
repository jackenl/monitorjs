import { BaseOptionsType, BreadcrumbPushData } from '@monitorjs/types'
import { getTimestamp } from '@monitorjs/utils'

export class Breadcrumb<O extends BaseOptionsType = BaseOptionsType> {
  private maxBreadcrumbs = 10
  private stack: BreadcrumbPushData[] = []
  constructor(options: Partial<O> = {}) {
    this.bindOptions(options)
  }

  bindOptions(options: Partial<O> = {}): void {
    const { maxBreadcrumbs } = options
    if (maxBreadcrumbs) {
      this.maxBreadcrumbs = maxBreadcrumbs
    }
  }

  push(data: BreadcrumbPushData): BreadcrumbPushData[] {
    if (!data.time) {
      data.time = getTimestamp()
    }
    if (this.stack.length >= this.maxBreadcrumbs) {
      this.shift()
    }
    return this.stack
  }

  private shift(): boolean {
    return this.stack.shift() !== undefined
  }

  clear(): void {
    this.stack = []
  }

  getStack(): BreadcrumbPushData[] {
    return this.stack
  }
}
