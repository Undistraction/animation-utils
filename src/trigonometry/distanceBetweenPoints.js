export default (fromPoint, toPoint) =>
  Math.abs(Math.hypot(toPoint.x - fromPoint.x, toPoint.y - fromPoint.y))
