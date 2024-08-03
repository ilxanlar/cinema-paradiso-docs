import { useEffect, useState } from 'react'
import { codeToHtml } from 'shiki'

type Props = {
  code: string
}

export default function CodeBlock(props: Props) {
  const { code } = props

  const [html, setHtml] = useState('')

  useEffect(() => {
    codeToHtml(code, {
      lang: 'tsx',
      theme: 'material-theme-ocean'
    }).then(html => {
      setHtml(html)
    })
  }, [code])

  return (
    <div className="code-block" dangerouslySetInnerHTML={{ __html: html }} />
  )
}
