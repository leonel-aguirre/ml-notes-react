import "./index.scss"

import React from "react"
import { render } from "react-dom"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { CodeBlock, dracula } from "react-code-blocks"

import mdText from "./test.md"

render(
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    components={{
      code({ inline, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || "")
        return !inline && match ? (
          <CodeBlock
            text={String(children).replace(/\n$/, "")}
            language={match[1]}
            showLineNumbers={true}
            theme={dracula}
            {...props}
          />
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        )
      },
    }}
  >
    {mdText}
  </ReactMarkdown>,
  document.querySelector("#root")
)
