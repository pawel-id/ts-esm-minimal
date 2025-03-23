import tap from 'tap'
import { add } from '../src/math.js'

tap.test('math should add 1 and 2', (t) => {
  t.equal(add(1, 2), 3)
  t.end()
})
