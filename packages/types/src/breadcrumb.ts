import { BreadcrumbTypes } from '@monitorjs/shared'

export interface BreadcrumbPushData {
  type: BreadcrumbTypes
  message: string
  level?: string
  time?: number
}
