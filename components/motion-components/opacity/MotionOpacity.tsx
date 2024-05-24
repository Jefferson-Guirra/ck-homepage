"use client"
import { motion } from "framer-motion"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
  margin?: string 
  delay?: number
}

export const MotionOpacity = ({...props}: Props) => {
  const {children, margin, delay} = props
  return (
    <motion.div
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1 }}
      viewport={{ margin }}
      transition={{ delay }}
      >
        {children}
    </motion.div>
  )
}