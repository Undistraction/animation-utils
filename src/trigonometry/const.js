import { divide } from 'ramda'

export const RAD_DEG = divide(180, Math.PI)
export const DEG_RAD = divide(Math.PI, 180)
