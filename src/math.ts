import { ok }  from 'node:assert'
import debug from 'debug'
const log = debug('math')

export function add(a: number, b: number): number {
  ok(Number.isFinite(a), 'a is not a number')
  log('add(%d, %d)', a, b)
  return a + b
}
