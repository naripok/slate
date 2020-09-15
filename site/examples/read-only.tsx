import React, { useState, useMemo } from 'react'
import { createEditor, Node } from '@naripok/slate'
import { Slate, Editable, withReact } from '@naripok/slate-react'

const ReadOnlyExample = () => {
  const [value, setValue] = useState<Node[]>(initialValue)
  const editor = useMemo(() => withReact(createEditor()), [])
  return (
    <Slate editor={editor} value={value} onChange={value => setValue(value)}>
      <Editable readOnly placeholder="Enter some plain text..." />
    </Slate>
  )
}

const initialValue = [
  {
    children: [
      { text: 'This is editable plain text, just like a <textarea>!' },
    ],
  },
]

export default ReadOnlyExample
