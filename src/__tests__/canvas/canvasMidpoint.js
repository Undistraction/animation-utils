import { canvasMidpoint } from '../../'

describe(`canvasMidpoint()`, () => {
  it(`returns an object containing the coordinates of the canvas's midpoint`, () => {
    const canvas = {
      clientWidth: 1000,
      clientHeight: 500,
    }

    const result = canvasMidpoint(canvas)
    expect(result).toEqual({
      x: 500,
      y: 250,
    })
  })
})
