export { DEG_RAD, RAD_DEG } from './trigonometry/const'

// -----------------------------------------------------------------------------
// Trignometry
// -----------------------------------------------------------------------------

export { default as point } from './trigonometry/point'
export { default as degToRad } from './trigonometry/degToRad'
export { default as radToDeg } from './trigonometry/radToDeg'
export { default as angleToPoint } from './trigonometry/angleToPoint'
export {
  default as distanceBetweenPoints,
} from './trigonometry/distanceBetweenPoints'

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
export {
  default as canvasAvailableMimeTypes,
} from './canvas/canvasAvailableMimeTypes'
export { default as canvasToImage } from './canvas/canvasToImage'
export { default as canvasToDownload } from './canvas/canvasToDownload'

// -----------------------------------------------------------------------------
// Device
// -----------------------------------------------------------------------------

export { default as devicePixelRatio } from './device/devicePixelRatio'
