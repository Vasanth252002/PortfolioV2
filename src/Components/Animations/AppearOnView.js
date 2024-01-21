import { motion } from "framer-motion";
import React from "react"
import ReactDom from "react-dom"

function AppearOnView({ children, delay=0 }) {
  let calculatedDelay=delay*0.3
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{once:true, amount:0.2}}
      variants={{
        visible: { opacity: 1, translateY: 0 },
        hidden: { opacity: 0, translateY: 50 }, // Adjust translateY as needed
      }}
      transition={{ duration: 0.8, delay:calculatedDelay }}
    >
      {children}
    </motion.div>
  );
}

export default AppearOnView;