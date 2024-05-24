"use client"
import styles from './styles.module.css'
import Link from 'next/link'
import { ReactNode } from 'react'
import { motion } from "framer-motion"

export interface Props {
  title: string,
  subtitle: string
  text: string
  link: string
  subtitleColor: string
  children: ReactNode
  contentOrder: number
  imgOrder: number
}




export const Card = ({...props}: Props) => {
  const {title, subtitle, link, children, text, subtitleColor, contentOrder, imgOrder } = props
  return (
    <article className={ styles.container }>
      <div style={{ order: contentOrder}} className={ styles.content }>
        <div className={ styles.title}>
          <motion.h4 
            initial={{ y:-70, x:0, opacity: 0 }}
            whileInView={{ y:0, x:0, opacity: 1 }}
            viewport={{ margin: '-50px' }}
            transition={{ duration: .7}}
            style={{ color: subtitleColor }}
          > 
            { subtitle } 
          </motion.h4>
          <motion.h3 
            initial={{ y:-70, x:0, opacity: 0 }}
            whileInView={{ y:0, x:0, opacity: 1 }}
            viewport={{ margin: '-50px' }}
            transition={{ duration: .7, delay:.2}}
          > 
            { title } 
          </motion.h3>

        </div>
        <motion.p
          initial={{ y:-70, x:0, opacity: 0 }}
          whileInView={{ y:0, x:0, opacity: 1 }}
          viewport={{ margin: '-50px' }}
          transition={{ duration: .7, delay:.4}}
        >
          { text }
        </motion.p>

        <motion.div
          initial={{ y:-70, x:0, opacity: 0 }}
          whileInView={{ y:0, x:0, opacity: 1 }}
          viewport={{ margin: '-50px' }}
          transition={{ duration: .7, delay:.6}}
        >
          <Link href={link} >
            saiba mais
          </Link>
        </motion.div>
      </div>
      <motion.div
          style={{ order: imgOrder}}
          className={ styles.imgContainer}
          initial={{ opacity: 0 }}
          whileInView={{opacity: 1 }}
          viewport={{ margin: '-50px' }}
          transition={{ duration: .7, delay:.4}}
      >
        { children }
      </motion.div>
    </article>
  )
}