import { times } from 'ramda'
import { isInteger } from 'ramda-adjunct'
import { randomIntInRange } from '../../'

describe(`randomIntInRange()`, () => {
  const min = 5
  const max = 10

  it(`returns a random number within the supplied range (min inclusive, max exclusive`, () => {
    times(() => {
      const result = randomIntInRange(min, max)
      expect(result).toBeGreaterThanOrEqual(min)
      expect(result).toBeLessThan(max)
      expect(isInteger(result)).toBeTrue()
    }, 50)
  })
})
