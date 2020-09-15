/** @jsx jsx  */
import { Node } from '@naripok/slate'
import { jsx } from '@naripok/slate-hyperscript'

export const input = (
  <editor>
    <element>
      <text />
    </element>
  </editor>
)
export const test = value => {
  return Node.ancestor(value, [0])
}
export const output = input.children[0]
