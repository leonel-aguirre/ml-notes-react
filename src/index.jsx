import "./index.scss"

import React from "react"
import { render } from "react-dom"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import mdText from "./test.md"

render(
  <ReactMarkdown remarkPlugins={[remarkGfm]}>{mdText}</ReactMarkdown>,
  document.querySelector("#root")
)
