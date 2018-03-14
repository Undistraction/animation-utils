import { map } from 'ramda'
import { degToRad } from '../../index'

describe(`degToRad`, () => {
  it(`converts degrees to radians`, () => {
    const values = [
      [0, 0],
      [90, 1.5707963267948966],
      [450, 7.853981633974483],
      [-45, -0.7853981633974483],
    ]

    map(([value, expected]) => {
      const result = degToRad(value)
      expect(result).toEqual(expected)
    })(values)
  })
})
