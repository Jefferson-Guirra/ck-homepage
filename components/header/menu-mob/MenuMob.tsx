"use client"
import styles from './styles.module.css'
import { useHeaderContext } from '@/context/header/HeaderContext'

export const MenuMob = () => {
  const { active, handleMenuMob} = useHeaderContext()

  return (
    <article onClick={handleMenuMob} className={styles['menu-mob']}>
        <span className={ active ? styles['active-line-1'] : styles.line}></span>
        <span className={  active ? styles['active-line-2'] : styles.line }></span>
        <span className={  active ? styles['active-line-3'] : styles.line}></span>

    </article>
  )
}
