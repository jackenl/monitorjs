import { BasePluginType } from '@monitorjs/types'
import { BrowserOptionsFieldsType } from './types'
import { BrowserClient } from './browserClient'

function createBrowserInstance(
  options: BrowserOptionsFieldsType = {},
  plugins: BasePluginType[] = [],
) {
  const browserClient = new BrowserClient(options)
  const browserPlugins: BasePluginType[] = []
  browserClient.use([...browserPlugins, ...plugins])
  return browserClient
}

const init = createBrowserInstance
export { createBrowserInstance, init, BrowserClient }
