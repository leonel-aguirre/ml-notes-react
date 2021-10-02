import React from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

const MarkdownRenderer = ({ children }) => {
  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
}

export default MarkdownRenderer
