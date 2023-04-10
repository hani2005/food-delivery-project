import "./App.css"
import { CreatePage, Header, MainPage } from "./components"
import { AnimatePresence } from "framer-motion"
import { Routes, Route } from "react-router-dom"
import { useStateValue } from "./context/StateProvider"
import { getAllFoodItems } from "./utils/firebaseFunctions"
import { useEffect } from "react"
import { actionType } from "./context/reducer"

function App() {
  const [{ foodItems }, dispatch] = useStateValue()

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data
      })
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <AnimatePresence mode="wait">
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainPage />} />
            <Route path="/createItem" element={<CreatePage />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  )
}

export default App
