"use client"
import { motion } from "framer-motion"
import { ElementType, ReactNode } from "react"

interface Props {
  children: ReactNode
  margin?: string 
  delay?: number
  x?: number
  y?:number
}

export const MotionTranslate = ({...props}: Props) => {
  const {children, margin, delay,y,x} = props
  return (
    <motion.div
    style={{ width: '50%'}}
    initial={{ y, x, opacity: 0 }}
    whileInView={{ y:0, x:0, opacity: 1 }}
    viewport={{ margin }}
    transition={{ duration: 1, delay }}
    >
        {children}
    </motion.div>
  )
}