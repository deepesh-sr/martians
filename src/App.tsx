import { Routes, Route, Outlet } from "react-router"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Events from "./pages/Events"
import FloatingNavbar from "./components/FloatingNavbar"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/events" element={<Events/>}/>
      </Route>

    </Routes>
  )
}

function Layout() {
  return (
<>

    <div className="bg-black">
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
