export default random => (min, max) => {
  const roundedMin = Math.ceil(min)
  const roundedMax = Math.floor(max)
  return Math.floor(random() * (roundedMax - roundedMin)) + roundedMin
}
