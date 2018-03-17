import { angleToPoint, radToDeg } from '../..'

describe(`angleToPoint()`, () => {
  it(`returns the correct angle to a point with greater x and y`, () => {
    const fromPoint = { x: 0, y: 0 }
    const toPoint = { x: 100, y: 100 }
    const result = angleToPoint(fromPoint, toPoint)
    expect(radToDeg(result)).toEqual(45)
  })

  it(`returns the correct angle to a point with lesser x and y`, () => {
    const fromPoint = { x: 0, y: 0 }
    const toPoint = { x: -100, y: -100 }
    const result = angleToPoint(fromPoint, toPoint)
    expect(radToDeg(result)).toEqual(-135)
  })
})
