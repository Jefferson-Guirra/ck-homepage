'use client'
import { useHeaderContext } from "@/context/header/HeaderContext"
import styles from "./styles.module.css"
import Link from "next/link"
export const Navbar = () => {
  const { active, handleMenuMob } = useHeaderContext()
  return (
    <nav className={ !active ? styles.container: ` ${ styles.container } ${ styles.active}` }>
        <Link href={"#"} onClick={ handleMenuMob }> Home </Link>
        <Link href={"#course"} onClick={ handleMenuMob }> Cursos </Link>
        <Link href={"#contact"} onClick={ handleMenuMob }> Contato </Link>
    </nav>
  )
}