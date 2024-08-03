import { Outlet } from "react-router-dom"

export default function DocsLayout() {
  return (
    <div className="flex min-h-screen">
      <aside className="sticky top-0 left-0 h-screen min-w-72 max-w-72 py-8">
        <nav className="h-full border-r border-[rgba(0,0,0,0.1)]"></nav>
      </aside>

      <main className="grow px-16 py-8">
        <Outlet />
      </main>
    </div>
  )
}
