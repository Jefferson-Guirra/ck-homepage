"use client"
import styles from "./styles.module.css"
import ContactSvg from '../../../public/images/contact.svg'
import { MotionOpacity, MotionTranslate, Title } from "@/components"
import Link from 'next/link'
import { Icon } from '@/components'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { useRef } from "react"


export const Contact = () => {
  const scrollRef = useRef(null)
  const scrollRef2 = useRef(null)
  return (
    <section className={ styles.container} ref={scrollRef2}>
      <MotionTranslate x={-150} margin={'-100px'}>
        <article className={ styles['svg-container']}>
          <ContactSvg />
        </article>

      </MotionTranslate>
      <span className={ styles.line }></span>
      <article 
        className={ styles.content }
      >
        <MotionOpacity margin="-100px">
          <Title text="CONTATO" />
        </MotionOpacity>
        <article ref={scrollRef} className={styles['cards-container']}>
          <MotionTranslate y={-50} margin="-100px">
            <Link href={'#'} target='_blank'>
              <Icon icon={FaInstagram} size={30} styleType='default' color='#6b0f6a'/>
            </Link>
          </MotionTranslate>
          <MotionTranslate y={-50} margin="-100px" delay={0.5}>
            <Link href={'#'} target='_blank'>
              <Icon icon={FaWhatsapp} size={30} styleType='default' color='#6b0f6a'/>
            </Link>
          </MotionTranslate>
          <MotionTranslate y={-50} margin="-100px" delay={1}>
            <Link href={'#'} target='_blank'>
              <Icon icon={FaFacebookSquare} size={30} styleType='default' color='#6b0f6a'/>
            </Link>
          </MotionTranslate>
        </article>
      </article>
      
    </section>
  )
}