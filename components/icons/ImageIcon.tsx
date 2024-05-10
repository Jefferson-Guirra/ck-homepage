import { ImageProps } from "next/dist/shared/lib/get-img-props"
import styles from './styles.module.css'
import Image from "next/image"

interface Props extends ImageProps {
    stylesType: | 'header' | 'big'

}

export const Icon = ({...props}: Props) => {
    const { stylesType, ...rest } = props
  return (
    <Image className={ styles[stylesType] } {...rest}/>
  )
}
