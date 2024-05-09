import { ButtonHTMLAttributes } from "react"
import styles from './styles.module.css'

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    styleTypes: | 'default' | 'btn-presentation'
    text: string

}

export const BtnDefault = ({...props}: Props) => {
    const { styleTypes, children, text } = props
  return (
    <button className={ styles[styleTypes]}>
        {children}
        {text}
    </button>
  )
}