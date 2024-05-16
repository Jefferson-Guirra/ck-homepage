"use client"
import { motion } from "framer-motion"
import { ElementType, ReactNode } from "react"

interface Props {
  children: ReactNode
  margin?: string 
}

export const MotionOpacity = ({...props}: Props) => {
  const {children, margin} = props
  return (
    <motion.div
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1 }}
      viewport={{ margin }}>
        {children}
    </motion.div>
  )
}