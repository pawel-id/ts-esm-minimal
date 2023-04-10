import assert from 'assert'
import { add } from '../../src/math.js'


describe('math', () => {
  it('should add 1 and 2', () => {
    const actual: number = add(1,2)
    const expected = 3

    assert.equal(actual, expected)
  })
})
