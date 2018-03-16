import { rgbaArrayToString } from '../../'

describe(`rgbaArrayToString()`, () => {
  it(`formats an rgba string from an array of [r, g, b, a] values`, () => {
    const a = [200, 100, 55, 0.5]
    const result = rgbaArrayToString(a)
    expect(result).toEqual(`rgba(200, 100, 55, 0.5)`)
  })

  it(`rounds rgb values to nearest integer but leaves a as float`, () => {
    const a = [199.5, 99.7, 55.1, 0.5]
    const result = rgbaArrayToString(a)
    expect(result).toEqual(`rgba(200, 100, 55, 0.5)`)
  })
})
