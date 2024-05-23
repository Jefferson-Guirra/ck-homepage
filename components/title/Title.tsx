import styles from "./styles.module.css"

interface Props {
  text: String
}


export const Title = ({...props}: Props) => {
  const { text} = props
  return (
    <h2 className={ styles.title }>
      {text}
    </h2>
  )
}