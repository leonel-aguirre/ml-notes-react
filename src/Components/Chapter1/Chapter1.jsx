import React from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import content from "./content.md"

const Chapter1 = () => {
  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
}

export default Chapter1
