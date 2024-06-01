import { ButtonHTMLAttributes } from "react"
import styles from './styles.module.css'

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    valuetype: | 'default' | 'btn-presentation' | 'btn-notice'
    text: string

}

export const BtnDefault = ({...props}: Props) => {
    const { valuetype, children, text } = props
  return (
    <button className={ styles[valuetype]}>
        {children}
        {text}
    </button>
  )
}