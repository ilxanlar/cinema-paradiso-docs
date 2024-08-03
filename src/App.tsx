import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'

import Home from '@/app/home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cinema-paradiso-docs" element={<Layout/>}>
          <Route path="" element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function Layout() {
  return <Outlet/>
}
