//states
import { useEffect, useState } from "react"
//components
import { Card_Category } from "./components/Card_Category"
import { Card_Schedules } from "./components/Card_Schedules"
import { Card_Confirmation } from "./components/Card_Confirmation"
import Header from "./components/Header"
//react-router
import { Routes, Route, useLocation } from "react-router-dom"

function App() {
  const [title, setTitle] = useState("Seleccionar servicio")
  const [value, setValue] = useState("1")


  const location = useLocation()
  useEffect(() => {
    if (location.pathname === "/schedules") {
      progressChange("Seleccionar horarios","2")
    } else if (location.pathname === "/confirmation") {
      progressChange("Confirmar turno","3")
    }
  }, [location])
const progressChange = (title:string,value:string) => {
  setTitle(title)
  setValue(value)
}

  return (
    <main className="main_container">
      <Header title={title} value={value} />
      <Routes>
        <Route path="/" element={<Card_Category />} />
        <Route path="/schedules" element={<Card_Schedules />} />
        <Route path="/confirmation" element={<Card_Confirmation />} />
      </Routes>
    </main>
  )
}

export default App
