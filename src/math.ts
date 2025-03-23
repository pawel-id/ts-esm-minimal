import debug from 'debug'
const log = debug('math')

export function add(a: number, b: number): number {
  log('add(%d, %d)', a, b)
  return a + b
}
