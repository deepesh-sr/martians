import { Routes, Route, Outlet } from "react-router"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path="/aboutus" element={<AboutUs></AboutUs>}/>
      </Route>

    </Routes>
  )
}

function Layout() {
  return (
<>
    <div className="bg-black">
      <header className="flex items-center justify-between p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6">
        <nav className="w-full">
          {/* Navigation content will go here */}
         </nav>
      </header>
      <main className="min-h-screen">
        <Outlet/>
      </main>
      </div>
      <footer className="bg-black">
        {/* Footer content will go here */}
      </footer>
</>
  )
}

export default App
