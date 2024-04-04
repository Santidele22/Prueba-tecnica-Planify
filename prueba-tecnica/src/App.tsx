//states
import { useEffect, useState } from "react"
//components
import { Card_Category } from "./components/Card_Category"
import { Card_Schedules } from "./components/Card_Schedules"
import { Card_Confirmation } from "./components/Card_Confirmation"
import Header from "./components/Header"
//react-router
import { Routes, Route, useLocation } from "react-router-dom"
import {SlotSelected, servicesSelected } from "./interfaces/interfaces"

function App() {
  //Progress
  const [title, setTitle] = useState("Seleccionar servicio")
  const [value, setValue] = useState("1")
  //category
  const [selectedCategories, setselectedCategories] = useState<Array<servicesSelected>>([])
  //schedule
  const [selectedSchedules, setselectedSchedules] = useState<Array<SlotSelected>>([])


  const location = useLocation()
  useEffect(() => {
    if (location.pathname === "/schedules") {
      progressChange("Seleccionar horarios", "2")
    } else if (location.pathname === "/confirmation") {
      progressChange("Confirmar turno", "3")
    }
  }, [location])


  function progressChange(title: string, value: string) {
    setTitle(title)
    setValue(value)
  }

  function handleClickCategory(value: Array<servicesSelected>) {
      setselectedCategories(value)
  }

  function handleClickSchedules(value: Array<SlotSelected>) {
    setselectedSchedules(value)
}

  return (
    <main className="main_container">
      <Header title={title} value={value} />
      <Routes>
        <Route path="/" element={<Card_Category updateCategories={handleClickCategory} />} />
        <Route path="/schedules" element={<Card_Schedules updatedSchedules={handleClickSchedules}/>} />
        <Route path="/confirmation" element={<Card_Confirmation />} />
      </Routes>
    </main>
  )
}

export default App
