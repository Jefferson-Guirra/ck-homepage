"use client"
import styles from "./styles.module.css"
import { Title } from '@/components'
import { motion } from 'framer-motion'
import ContactSvg from '../../../public/images/contact.svg'
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Link from 'next/link';



export const Contact = () => {

  return (
    <section className={ styles.container} id='contact'>
   
      <Title text='CONTATO'/>
      <article className={ styles.content}>
        <article className={ styles.box}>
        <motion.h2
            initial={{ y:-70, x:0, opacity: 0 }}
            whileInView={{ y:0, x:0, opacity: 1 }}
            viewport={{ margin: '-50px' }}
            transition={{ duration: .7}}
          > 
            Estamos ansiosos para falar com você
          </motion.h2>

          <motion.p
            initial={{ y:-70, x:0, opacity: 0 }}
            whileInView={{ y:0, x:0, opacity: 1 }}
            viewport={{ margin: '-50px' }}
            transition={{ duration: .7, delay: 0.2}}
          >
          Nós adoramos ter você por perto e gostaríamos de te manter atualizado sobre tudo que fazemos por aqui.
          </motion.p>
          <div className={ styles.cards }>

            <motion.div
              initial={{ y:-70, x:0, opacity: 0 }}
              whileInView={{ y:0, x:0, opacity: 1 }}
              viewport={{ margin: '-50px' }}
              transition={{ duration: .7, delay: .4}}
            >
             <Link href='#' ><FaWhatsapp color='#0BC71A' size={35}/></Link>
            </motion.div>
            <motion.div
              initial={{ y:-70, x:0, opacity: 0 }}
              whileInView={{ y:0, x:0, opacity: 1 }}
              viewport={{ margin: '-50px' }}
              transition={{ duration: .7, delay: .6}}
            >
              <Link href='#'> <FaInstagram color='#E8008D' size={35} /></Link>
            </motion.div>

            <motion.div
              initial={{ y:-70, x:0, opacity: 0 }}
              whileInView={{ y:0, x:0, opacity: 1 }}
              viewport={{ margin: '-50px' }}
              transition={{ duration: .7, delay: .8}}
            >
              <Link href='#'> <FaFacebook color='#3A559F' size={37} /></Link>

            </motion.div>

            <motion.div
              initial={{ y:-70, x:0, opacity: 0 }}
              whileInView={{ y:0, x:0, opacity: 1 }}
              viewport={{ margin: '-50px' }}
              transition={{ duration: .7, delay: 1}}
            >
              <Link href=''><MdOutlineEmail fill='#B53120' size={35}/></Link>
            </motion.div>

          </div>
        </article>
        <motion.div 
          className={ styles['container-svg']}
          initial={{ opacity: 0 }}
          whileInView={{opacity: 1 }}
          viewport={{ margin: '-50px' }}
          transition={{ duration: .7, delay: .3}}
        >
          <ContactSvg />
        </motion.div>
      </article>
    </section>
  )
}