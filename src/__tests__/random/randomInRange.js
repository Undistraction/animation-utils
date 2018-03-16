import { times } from 'ramda'
import { randomInRange } from '../../'

describe(`randomInRange()`, () => {
  const min = 5
  const max = 10

  it(`returns a random number within the supplied range (min inclusive, max exclusive`, () => {
    times(() => {
      const result = randomInRange(Math.random)(min, max)
      expect(result).toBeGreaterThanOrEqual(min)
      expect(result).toBeLessThan(max)
    }, 50)
  })
})
