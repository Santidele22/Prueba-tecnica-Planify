//states
import { useEffect, useState } from "react"
//components
import { Card_Category } from "./components/Card_Category"
import { Card_Schedules } from "./components/Card_Schedules"
import { Card_Confirmation } from "./components/Card_Confirmation"
import { Footer } from "./components/footer"
import Header from "./components/Header"
import { MyTurns } from "./components/my_turns"
//react-router
import { Routes, Route, useLocation } from "react-router-dom"
import { SelectedData, SlotSelected, servicesSelected } from "./interfaces/interfaces"
import toast, { Toaster } from "react-hot-toast"

function App() {
  //Progress
  const [title, setTitle] = useState("Seleccionar servicio")
  const [value, setValue] = useState("1")
  //category
  const [selectedCategories, setselectedCategories] = useState<Array<servicesSelected>>([])
  //schedule
  const [selectedSchedules, setselectedSchedules] = useState<Array<SlotSelected>>([])
  //services confirmado
  const [service, setServices] = useState<Array<SelectedData>>([])
  
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === "/") {
      progressChange("Seleccionar servicios", "1")
    }
    else if (location.pathname === "/schedules") {
      progressChange("Seleccionar horarios", "2")
    } else {
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

  const handleServiceConfirmation = () => {
    // Combine selectedCategories and selectedSchedules into a single object
    const newService: SelectedData = {
      categorySelected: selectedCategories,
      schedulesSelected: selectedSchedules
    };
    // Add the combined object to the services array
    setServices([...service, newService]);
    // Clear selectedCategories and selectedSchedules
    setselectedCategories([]);
    setselectedSchedules([]);
    toast.success("Turno confirmado")
  };

  return (
    <>
      <main className="main_container">
        <Header title={title} value={value} />
        <Routes>
          <Route path="/" element={<Card_Category updateCategories={handleClickCategory} />} />
          <Route path="/schedules" element={<Card_Schedules updatedSchedules={handleClickSchedules} />} />
          <Route path="/confirmation" element={<Card_Confirmation category={selectedCategories} schedulesSelected={selectedSchedules} handleClick={handleServiceConfirmation}/>} />
          <Route path="/myturns" element={<MyTurns service={service}/>} /> 
        </Routes>
        <Footer />
      </main>
      <Toaster/>
    </>
  )
}

export default App
