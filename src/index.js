export { DEG_RAD, RAD_DEG } from './trigonometry/const'

// -----------------------------------------------------------------------------
// Trignometry
// -----------------------------------------------------------------------------

export { default as degToRad } from './trigonometry/degToRad'
export { default as radToDeg } from './trigonometry/radToDeg'
export { default as angleToPoint } from './trigonometry/angleToPoint'

// -----------------------------------------------------------------------------
// Random
// -----------------------------------------------------------------------------

export { default as randomInRange } from './random/randomInRange'
export { default as randomIntInRange } from './random/randomIntInRange'
export {
  default as randomIntInRangeInclusiveMax,
} from './random/randomIntInRangeInclusiveMax'

// -----------------------------------------------------------------------------
// Colour
// -----------------------------------------------------------------------------

export { default as rgbArrayToString } from './color/rgbArrayToString'
export { default as rgbaArrayToString } from './color/rgbaArrayToString'

// -----------------------------------------------------------------------------
// Canvas
// -----------------------------------------------------------------------------

export { default as canvasMidpoint } from './canvas/canvasMidpoint'
export {
  default as canvasContentDimensions,
} from './canvas/canvasContentDimensions'
export { default as canvasScaleValue } from './canvas/canvasScaleValue'

// -----------------------------------------------------------------------------
// Device
// -----------------------------------------------------------------------------

export { default as devicePixelRatio } from './device/devicePixelRatio'
