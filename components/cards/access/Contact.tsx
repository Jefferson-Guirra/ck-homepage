"use client"
import styles from "./styles.module.css"
import { Title } from '@/components'
import ContactSvg from '../../../public/images/contact.svg'
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Link from 'next/link';



export const Contact = () => {

  return (
    <section className={ styles.container} >
   
      <Title text='CONTATO'/>
      <article className={ styles.content}>
        <article className={ styles.box}>
          <h2>
            Estamos ansiosos para falar com você
          </h2>
          <p>
          Nós adoramos ter você por perto e gostaríamos de te manter atualizado sobre tudo que fazemos por aqui.
          </p>
          <div className={ styles.cards }>
            <Link href='#' ><FaWhatsapp color='#0BC71A' size={35}/></Link>
            <Link href='#'> <FaInstagram color='#E8008D' size={35} /></Link>
            <Link href='#'> <FaFacebook color='#3A559F' size={37} /></Link>
            <Link href=''><MdOutlineEmail fill='#B53120' size={35}/></Link>

          </div>
        </article>
        <ContactSvg />
      </article>
    </section>
  )
}