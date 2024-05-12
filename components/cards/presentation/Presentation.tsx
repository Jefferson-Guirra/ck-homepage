"use client"
import { FaCalendarDays } from "react-icons/fa6";
import styles from './styles.module.css'
import { useEffect, useState } from 'react'
import { Button, Icon } from '@/components'
import { BackgroundCover } from '@/components';

export const Presentation = () => {
  const [active,setActive] = useState<'active' | undefined>()
  useEffect(() => {
    setActive('active')
  },[])
  return (
    <section className={ styles.container }>
      <article className={ styles.content}>
        <h3 className={ active ? `${styles.title}   ${styles[active]}` : styles.title }>
          O seu futuro começa hoje!
        </h3>
        <h2 className={ active ? `${styles.title}   ${styles[active]}` : styles.title }>
          Aprenda se divertindo
          e realize seus sonhos!
        </h2>
        <p className={ active ? `${styles.title}   ${styles[active]}` : styles.title }>
          Somos um núcleo tecnológico de aprendizado inovador para crianças, adolescentes e jovens.
        </p>
        <Button.Default styleTypes='btn-presentation' text='Agende sua aula presencial' type='button'>
            <Icon styleType={"default"} icon={FaCalendarDays} size={23}/>
        </Button.Default>
      </article>
      <span className={styles.cover}></span>
      <BackgroundCover           
          alt='minecraft gif'
          src='/gifs/home.gif'
          fill
      />
    </section>
  )
}

