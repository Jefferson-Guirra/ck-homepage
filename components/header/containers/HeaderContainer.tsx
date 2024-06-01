import { Navbar, ImageIcon  } from "../../../components"
import { LuBrainCircuit } from "react-icons/lu";
import styles from './styles.module.css'

export const HeaderContainer = () => {
  return (
    <header className={ styles.container}>
        <article className={ styles.content}>
          <article className={styles.logo}>
            <LuBrainCircuit size={28}/>
            EduTech +
          </article>
          <Navbar />

        </article>

    </header>
  )
}
