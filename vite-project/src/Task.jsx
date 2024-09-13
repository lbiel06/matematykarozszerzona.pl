import Markdown from "react-markdown"
import rehypeKatex from "rehype-katex"
import remarkMath from "remark-math"
import remarkGfm from "remark-gfm"

import "./Task.css"
import "katex/dist/katex.min.css"

const Task = ({ doc }) => (
  <div className="task">
    <p class="task-info">
      Zadanie {doc.numer}, {doc.zbior}{" "}
      <span style={{ float: "right" }}>0-{doc.punkty} pkt.</span>
    </p>
    <hr />
    <Markdown
      remarkPlugins={[remarkMath, remarkGfm]}
      rehypePlugins={[rehypeKatex]}
    >
      {doc.latex.replace(/\\n/g, "  \n").replaceAll("!=", "\\neq")}
    </Markdown>
    <Markdown
      remarkPlugins={[remarkMath, remarkGfm]}
      rehypePlugins={[rehypeKatex]}
    ></Markdown>
    <div
      dangerouslySetInnerHTML={{ __html: doc.svg }}
      className="task-image"
    ></div>
  </div>
)

export default Task
