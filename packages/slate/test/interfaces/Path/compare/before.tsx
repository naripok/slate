import { Path } from '@naripok/slate'

export const input = {
  path: [0, 1, 2],
  another: [1],
}
export const test = ({ path, another }) => {
  return Path.compare(path, another)
}
export const output = -1
