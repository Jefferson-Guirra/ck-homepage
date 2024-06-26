import { ElementType } from "react"

interface Props {
    icon: ElementType
    color?: string
    size: number 
    valuetype: | 'default'
}

export const Icon = ({icon: Icon,...props}: Props) => {
  return (
    <Icon {...props} />
  )
}
