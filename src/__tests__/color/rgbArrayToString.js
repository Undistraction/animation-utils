import { rgbArrayToString } from '../../'

describe(`rgbArrayToString()`, () => {
  it(`formats an rgb string from an array of [r,g,b]`, () => {
    const a = [200, 100, 55]
    const result = rgbArrayToString(a)
    expect(result).toEqual(`rgb(200, 100, 55)`)
  })

  it(`rounds rgb values to nearest integer`, () => {
    const a = [199.5, 99.7, 55.1]
    const result = rgbArrayToString(a)
    expect(result).toEqual(`rgb(200, 100, 55)`)
  })
})
