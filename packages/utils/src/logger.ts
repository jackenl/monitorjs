import { _global } from './global'

const LOG_PREFIX = 'MTS'

export class Logger {
  private readonly _console: Console = {} as Console
  private enabled = false
  constructor() {
    _global.console = console || _global.console
    if (_global.console) {
      const { console: _console } = _global
      const logTypes = [
        'log',
        'info',
        'warn',
        'error',
        'debug',
        'assert',
      ] as const
      logTypes.forEach((logType) => {
        if (!(logType in _console)) return
        this._console[logType] = _console[logType]
      })
    }
  }

  bindOptions(debug?: boolean): void {
    this.enabled = debug ? true : false
  }

  disabled(): void {
    this.enabled = false
  }

  enable(): void {
    this.enabled = true
  }

  log(...args: any[]): void {
    if (!this.enabled) return
    this._console.log(`${LOG_PREFIX}[Log]:`, ...args)
  }

  info(...args: any[]): void {
    if (!this.enabled) return
    this._console.log(`${LOG_PREFIX}[Info]:`, ...args)
  }

  warn(...args: any[]): void {
    if (!this.enabled) return
    this._console.warn(`${LOG_PREFIX}[Warn]:`, ...args)
  }

  error(...args: any[]): void {
    if (!this.enabled) return
    this._console.error(`${LOG_PREFIX}[Error]`, ...args)
  }
}

const logger = new Logger()
export { logger }
