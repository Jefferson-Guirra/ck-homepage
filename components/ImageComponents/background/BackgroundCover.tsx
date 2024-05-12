import Image, { ImageProps } from 'next/image'
import styles from "./styles.module.css"


export const BackgroundCover = ({...props}: ImageProps) => {
  return (
    <div className={ styles.container}>
    <Image
      {...props}
    />
  </div>
  )
}
