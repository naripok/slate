/** @jsx jsx */
import { createHyperscript } from '@naripok/slate-hyperscript'

const jsx = createHyperscript({
  elements: {
    paragraph: { type: 'paragraph' },
  },
})
export const input = <paragraph>word</paragraph>
export const output = {
  type: 'paragraph',
  children: [
    {
      text: 'word',
    },
  ],
}
