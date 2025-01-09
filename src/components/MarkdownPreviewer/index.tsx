"use client"
import MarkdownPreview from '@uiw/react-markdown-preview';

const source = `
## MarkdownPreview

> todo: React component preview markdown text.
`;

export default function MarkdownPreviewer({data}:any) {
  return (
    <MarkdownPreview source={data} style={{ padding: 16, color:"black", backgroundColor:"white", borderRadius:16 }} />
  )
}