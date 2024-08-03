import React from "react"

type Props = {
  children: React.ReactNode
}

export default function Content(props: Props) {
  const { children } = props

  return (
    <div>{children}</div>
  )

  return (
    <div className="grid grid-cols-2 gap-8">
      <div>{children}</div>
      <div />
    </div>
  )
}
