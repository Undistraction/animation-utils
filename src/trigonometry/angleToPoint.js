export default (fromPoint, toPoint) => {
  const diffX = toPoint.x - fromPoint.x
  const diffY = toPoint.y - fromPoint.y
  return Math.atan2(diffX, diffY)
}
