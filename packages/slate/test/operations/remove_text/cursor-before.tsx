/** @jsx jsx */
import { jsx } from '@naripok/slate-hyperscript'

export const input = (
  <editor>
    <element>
      w<cursor />
      ord
    </element>
  </editor>
)
export const operations = [
  {
    type: 'remove_text',
    path: [0, 0],
    offset: 1,
    text: 'or',
  },
]
export const output = (
  <editor>
    <element>
      w<cursor />d
    </element>
  </editor>
)
