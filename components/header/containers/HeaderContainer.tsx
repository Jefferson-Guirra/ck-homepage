import { Navbar, ImageIcon  } from "../../../components"
import styles from './styles.module.css'

export const HeaderContainer = () => {
  return (
    <header className={ styles.container}>
        <article className={ styles.content}>
          <article className={styles.logo}>
            <ImageIcon stylesType="header" src='/images/logo-default.png' alt="ck-icon" width={'150'} height={'150'} />
            Código Kid
          </article>
          <Navbar />

        </article>

    </header>
  )
}
