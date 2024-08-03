import React from "react"
import CodeBlock from "./CodeBlock"

type Props = {
  children: React.ReactNode
  code: string
}

export default function Example(props: Props) {
  const { children, code } = props

  return (
    <div className="grid grid-cols-1 gap-8">
      <div className="overflow-y-auto">
        {code ? <CodeBlock code={code} /> : null}
      </div>
      <div className="hidden">{children}</div>
    </div>
  )
}
