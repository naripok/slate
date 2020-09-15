import React, { useMemo, useState } from 'react'
import { createEditor, Node } from '@naripok/slate'
import { withHistory } from '@naripok/slate-history'
import { Slate, withReact } from '@naripok/slate-react'
import { EditablePlugins, pipe, SlateDocument } from '@naripok/slate-plugins'

const initialValue: Node[] = [
  {
    type: 'paragraph',
    children: [
      {
        text: 'This text is bold, italic and underlined.',
      },
    ],
  },
]

const plugins = []

const withPlugins = [withReact, withHistory] as const

const Editor = () => {
  const [value, setValue] = useState(initialValue)

  const editor = useMemo(() => pipe(createEditor(), ...withPlugins), [])

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={newValue => setValue(newValue as SlateDocument)}
    >
      <EditablePlugins plugins={plugins} placeholder="Enter some text..." />
    </Slate>
  )
}

export default Editor
