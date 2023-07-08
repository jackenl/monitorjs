export class Queue<T = any> {
  private stack: T[]
  private head
  private tail
  constructor() {
    this.stack = []
    this.head = 0
    this.tail = 0
  }

  enqueue(value: T) {
    this.stack[this.tail] = value
    this.tail++
  }

  dequeue() {
    const item = this.stack[this.head]
    delete this.stack[this.head]
    this.head++
    return item
  }

  peek() {
    return this.stack[this.head]
  }

  get length() {
    return this.tail - this.head
  }

  get isEmpty() {
    return this.length === 0
  }
}
