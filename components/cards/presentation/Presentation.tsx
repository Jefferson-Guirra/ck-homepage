import styles from './styles.module.css'
import { Button } from '@/components'
export const Presentation = () => {
  return (
    <section className={ styles.container }>
      <div className={ styles.content}>
        <h3>
          O seu futuro começa hoje!
        </h3>
        <h2>
          Aprenda se divertindo
          e realize seus sonhos!
        </h2>
        <p>Somos um núcleo tecnológico de aprendizado inovador para crianças, adolescentes e jovens.</p>
        <Button.Default styleTypes='btn-presentation' text='Agende sua aula presencial' type='button' />

      </div>
    </section>
  )
}

