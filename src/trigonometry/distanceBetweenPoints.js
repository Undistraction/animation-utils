export default (fromPoint, toPoint) => {
  Math.hypot(toPoint.x - fromPoint.x, toPoint.y - fromPoint.y)
}
