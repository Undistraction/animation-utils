import { map } from 'ramda'
import { radToDeg } from '../../index'

describe(`radToDeg`, () => {
  it(`converts degrees to radians`, () => {
    const values = [
      [0, 0],
      [1, 57.29577951308232],
      [7, 401.07045659157626],
      [-2, -114.59155902616465],
    ]

    map(([value, expected]) => {
      const result = radToDeg(value)
      expect(result).toEqual(expected)
    })(values)
  })
})
