import point from '../../trigonometry/point'
import { distanceBetweenPoints } from '../..'

describe(`distanceBetweenPoints()`, () => {
  it(`returns the distance between two points`, () => {
    const p1 = point(0, 0)
    const p2 = point(50, 50)
    expect(distanceBetweenPoints(p1, p2)).toEqual(70.71067811865476)
    expect(distanceBetweenPoints(p2, p1)).toEqual(70.71067811865476)
  })
})
