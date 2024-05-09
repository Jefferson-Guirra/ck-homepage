import { Navbar, Icon  } from "../../../components"
import styles from './styles.module.css'

export const HeaderContainer = () => {
  return (
    <header className={ styles.container}>
        <Icon stylesType="header" src='/images/logo-default.png' alt="ck-icon" width={'100'} height={'100'} />
        <Navbar />

    </header>
  )
}
