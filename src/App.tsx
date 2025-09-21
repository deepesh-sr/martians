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

    <div className=" bg-black">
      <header className="flex items-center justify-between p-4">
      
        <nav className="">
          
         </nav>
      </header>
      <main className="min-h-screen">
        <Outlet/>

      </main>
      </div>
      <footer >
        
      </footer>
    
</>
  )
}

export default App
