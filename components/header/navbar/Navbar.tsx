import styles from "./styles.module.css"
import Link from "next/link"
export const Navbar = () => {
  return (
    <nav className={ styles.container }>
        <Link href={"#"}> Home </Link>
        <Link href={"#course"}> Cursos </Link>
        <Link href={"#contact"}> Contato </Link>

    </nav>
  )
}