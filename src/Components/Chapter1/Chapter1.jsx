import "./Chapter1.scss"

import React from "react"

import MarkdownRenderer from "../MarkdownRenderer/MarkdownRenderer"
import content from "./content.md"

const Chapter1 = () => {
  return (
    <div className="chapter-1">
      <div className="chapter-1__container">
        <MarkdownRenderer>{content}</MarkdownRenderer>
      </div>
    </div>
  )
}

export default Chapter1
