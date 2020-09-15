/** @jsx jsx */
import { Transforms } from '@naripok/slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.move(editor, { edge: 'focus' })
}
export const input = (
  <editor>
    <block>
      one <anchor />
      tw
      <focus />o three
    </block>
  </editor>
)
export const output = (
  <editor>
    <block>
      one <anchor />
      two
      <focus /> three
    </block>
  </editor>
)
