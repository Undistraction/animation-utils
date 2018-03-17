import { point } from '../..'

describe(`point()`, () => {
  it(`returns an object with x and y props`, () => {
    const x = 50
    const y = 100
    const p = point(x, y)
    expect(p.x).toEqual(x)
    expect(p.y).toEqual(y)
  })
})
