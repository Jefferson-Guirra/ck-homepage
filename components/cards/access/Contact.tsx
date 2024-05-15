import styles from "./styles.module.css"
import ContactSvg from '../../../public/images/contact.svg'
import Link from 'next/link'
import { Icon } from '@/components'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";



export const Contact = () => {
  return (
    <section className={ styles.container}>
      <article className={ styles['svg-container']}>
        <ContactSvg />
      </article>
      <span className={ styles.line }></span>
      <article className={ styles.content }>
        <h2>CONTATO</h2>
        <article className={styles['cards-container']}>
          <Link href={'#'} target='_blank'>
            <Icon icon={FaInstagram} size={30} styleType='default' color='#6b0f6a'/>
          </Link>
          <Link href={'#'} target='_blank'>
            <Icon icon={FaWhatsapp} size={30} styleType='default' color='#6b0f6a'/>
          </Link>
          <Link href={'#'} target='_blank'>
            <Icon icon={FaFacebookSquare} size={30} styleType='default' color='#6b0f6a'/>
          </Link>
        </article>
      </article>
      
    </section>
  )
}