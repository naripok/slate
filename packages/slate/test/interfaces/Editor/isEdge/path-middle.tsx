/** @jsx jsx */
import { Editor } from '@naripok/slate'
import { jsx } from '../../..'

export const input = (
  <editor>
    <block>
      on
      <cursor />e
    </block>
  </editor>
)
export const test = editor => {
  const { anchor } = editor.selection
  return Editor.isEdge(editor, anchor, [0])
}
export const output = false
