import styles from "./styles.module.css"
import Link from "next/link"
export const Navbar = () => {
  return (
    <nav className={ styles.container }>
        <Link href={"#"}> Home </Link>
        <Link href={"#"}> Mídia </Link>
        <Link href={"#"}> Cursos </Link>
        <Link href={"#"}> Contato </Link>

    </nav>
  )
}