export default (min, max) => {
  const roundedMin = Math.ceil(min)
  const roundedMax = Math.floor(max)
  return Math.floor(Math.random() * (roundedMax - roundedMin)) + roundedMin
}
