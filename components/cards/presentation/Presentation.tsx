"use client"
import { FaCalendarDays } from "react-icons/fa6";
import styles from './styles.module.css'
import Image from 'next/image';
import { Button, Icon } from '@/components'
import Technology from "../../../public/images/technology.svg"


export const Presentation = () => {
  return (
    <section className={ styles.container }>
      <article className={ styles.content}>
        <h2 className={styles.title}>
          Aprenda se divertindo
          e realize seus sonhos!
        </h2>
        <p className={ styles.title }>
          Somos um núcleo tecnológico de aprendizado inovador para crianças, adolescentes e jovens.
        </p>
          <Button.Default valuetype='btn-presentation' text='Agende sua aula presencial' type='button'>
              <Icon valuetype={"default"} icon={FaCalendarDays} size={23}/>
          </Button.Default>
      </article>
      <article className={ styles.icon}>
        <Technology />

      </article>
      <span className={ styles.circle }>

      </span>
    </section>
  )
}

