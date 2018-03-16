import { devicePixelRatio } from '..'

export default (width, height) => {
  const ratio = devicePixelRatio()
  return {
    width: width * ratio,
    height: height * ratio,
  }
}
