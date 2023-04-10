import React, { useEffect, useRef, useState } from "react"
import HomeSection from "./HomeSection"
import { motion } from "framer-motion"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"
import RowSection from "./RowSection"
import { useStateValue } from "../context/StateProvider"
import MenuSection from "./MenuSection"
import CartSection from "./CartSection"

function MainPage() {
  const [{ foodItems, cartShow }, dispatch] = useStateValue()
  const [scroll, setScroll] = useState(0)

  useEffect(() => {}, [scroll, cartShow])

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeSection />

      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            Our fresh & healthy fruits
          </p>

          <div className="hidden md:flex items-center gap-3">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer hover:shadow-lg flex items-center justify-center"
              onClick={() => setScroll(-200)}
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer hover:shadow-lg flex items-center justify-center"
              onClick={() => setScroll(200)}
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
        <RowSection
          scroll={scroll}
          flag={true}
          data={foodItems?.filter((n) => n.category === "fruits")}
        />
      </section>

      <MenuSection />

      {cartShow && <CartSection />}
    </div>
  )
}

export default MainPage
