"use client"
import styles from "./styles.module.css"
import { Button, Icon } from '../../components'
import { FaCalendarDay } from 'react-icons/fa'
import { motion } from "framer-motion"


export const Notice = () => {
  return (
    <section className={ styles.container}>
      <article className={ styles.content }>
        <article className={ styles.title }>
        <motion.p
            initial={{ y:-70, x:0, opacity: 0 }}
            whileInView={{ y:0, x:0, opacity: 1 }}
            viewport={{ margin: '-50px' }}
            transition={{ duration: .7}}
          > 
            Agende uma aula Gratuita
          </motion.p>

          <motion.h2
            initial={{ y:-70, x:0, opacity: 0 }}
            whileInView={{ y:0, x:0, opacity: 1 }}
            viewport={{ margin: '-50px' }}
            transition={{ duration: .7, delay: .2}}
          >
            Conheça nossos cursos realizando uma aula experimental.
          </motion.h2>
        </article>
        <motion.div
          initial={{ y:-70, x:0, opacity: 0 }}
          whileInView={{ y:0, x:0, opacity: 1 }}
          viewport={{ margin: '-50px' }}
          transition={{ duration: .7, delay: .2}}
        >
          <Button.Default valuetype='btn-notice' text='Agende sua aula presencial' type='button'>
                <Icon valuetype={"default"} icon={FaCalendarDay} size={23}/>
          </Button.Default>
        </motion.div>
      </article>
    </section>
  )
}
