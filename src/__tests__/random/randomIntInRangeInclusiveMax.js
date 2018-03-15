import { times } from 'ramda'
import { isInteger } from 'ramda-adjunct'
import { randomIntInRangeInclusiveMax } from '../../'

describe(`randomIntInRangeInclusiveMax()`, () => {
  const min = 5
  const max = 10

  it(`returns a random number within the supplied range (min inclusive, max exclusive`, () => {
    times(() => {
      const result = randomIntInRangeInclusiveMax(Math.random)(min, max)
      expect(result).toBeGreaterThanOrEqual(min)
      expect(result).toBeLessThanOrEqual(max)
      expect(isInteger(result)).toBeTrue()
    }, 50)
  })
})
