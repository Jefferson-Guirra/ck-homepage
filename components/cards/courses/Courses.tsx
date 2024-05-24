"use server"
import styles from "./styles.module.css"
import { Title } from '@/components/title/Title'
import { MotionOpacity } from '@/components/motion-components/opacity/MotionOpacity'
import { Card } from './components/cards/Card'
import EnglishImg from '../../../public/images/english.png'
import CodingImg from '../../../public/images/coding.png'
import YoutuberImg from '../../../public/images/youtuber.png'
import MathImg from '../../../public/images/math.png'
import TechImg from '../../../public/images/tech.png'
import RobotImg from '../../../public/images/robot.png'
import GamesImg from '../../../public/images/games.png'
import AppImg from '../../../public/images/app.png'
import Image from 'next/image'

export const Courses = () => {
  return (
    <section className={ styles.container} id='course'>
      <article className={ styles.box }>
        <article className={ styles.title }>

          <MotionOpacity delay={0.2}>
            <Title text="NOSSOS CURSOS"/>
          </MotionOpacity>

          <MotionOpacity delay={0.4}>
            <p>Os nossos cursos são os mais diversos e atendem as expectativas de cada aluno em relação às matérias lecionadas, os temas vão desde Photoshop, passando por Criação de Games e indo até Programação para Web.</p>
          </MotionOpacity>


        </article>
        <Card 
          contentOrder={0}
          imgOrder={1}
          title='Inglês by Skill'
          subtitle='Aprenda Inglês com uma das melhores metodologias do mercado!'
          subtitleColor='#455A64'
          link='#'
          text='O método Skill hoje presente no mundo todo, atua com aulas Desde o primeiro dia você aprende algo novo. Aulas 100% práticas e interativas. Siga o seu próprio ritmo de aprendizado. As aulas possuem locução com professores nativos. Atividades extras. Aplicativo. Livro de homework. Conversão em grupo.'
        >
          <Image src={ EnglishImg } placeholder='blur' width={400} height={400}/>
        </Card>

        <Card 
          contentOrder={1}
          imgOrder={0}
          title='KidCoding'
          subtitle='Aprenda a criar sistemas, aplicativos e sites!'
          subtitleColor='#455A64'
          link='#'
          text='O aluno é apresentado aos elementos essenciais de construção de páginas para a Internet, conceitos de HTML e inserção de arquivos multimídia. Proporcionamos os conhecimentos necessários para a utilização de diversas linguagens de programação. Desenvolvemos este curso para quem deseja aperfeiçoar técnicas básicas para o desenvolvimento de softwares.'
        >
          <Image src={ CodingImg } placeholder='blur' width={400} height={400}/>
        </Card>

        <Card 
          contentOrder={0}
          imgOrder={1}
          title='KidTube'
          subtitle='Crie um Canal de Sucesso no YouTube!'
          subtitleColor='#455A64'
          link='#'
          text='Ensinamos recursos essenciais para a criação de vídeos relevantes! Instruímos como definir o público alvo e desenvolver um canal de sucesso. Aprenda conceitos teóricos básicos de softwares de edição de vídeos e imagens para a profissionalização dos vídeos produzidos por você!'
        >
          <Image src={ YoutuberImg } placeholder='blur' width={400} height={400}/>
        </Card>

        <Card 
          contentOrder={1}
          imgOrder={0}
          title='KidMath'
          subtitle='Matemática Digital e Aplicada a nova realidade!'
          subtitleColor='#455A64'
          link='#'
          text='Com os personagens Serginho, Fred, Lú, Lipe, Ju e Marcão, aprenda operações numéricas se diverdindo e encarando grandes desafios. Que tal aprender matemática de maneira digital e totalmente interativa? O curso passa por todos os níveis de matemática, iniciando com os conceitos básicos de números romanos, egípicios, decimais, e indo até potência, fatoração e equações de segundo grau.'
        >
          <Image src={ MathImg } placeholder='blur' width={400} height={400}/>
        </Card>

        <Card 
          contentOrder={0}
          imgOrder={1}
          title='KidTech'
          subtitle='Letramento Digital'
          subtitleColor='#455A64'
          link='#'
          text='Nosso curso KidTech® se destina a crianças e adolescentes que estão iniciando no mundo da computação e tecnologia. Este curso é a porta de entrada para todas as outras trilhas desempenhadas na CódigoKid. Após o aluno conhecer os conceitos básicos de tecnologia e inovação, ele estará apto a seguir o caminho que mais lhe agradar.'
        >
          <Image src={ TechImg } placeholder='blur' width={400} height={400}/>
        </Card>

        <Card 
          contentOrder={1}
          imgOrder={0}
          title='KidRobot'
          subtitle='Robótica Educacional e Pratica'
          subtitleColor='#455A64'
          link='#'
          text='Nosso curso KidRobot® conta com a mesma tecnologia utilizada por grandes empresas e até mesmo pela NASA para criação de protótipos robóticos. Os alunos irão aprender conceitos básicos de eletrônica, mecânica e programação, por meio da construção de um robô autônomo, com rotas de locomoção programadas. Toda a programação de Inteligência Artificial do robô será feita com a mesma metodologia de ensino de Universidades Americanas como Stanford, Harvard e MIT.'
        >
          <Image src={ RobotImg } placeholder='blur' width={400} height={400}/>
        </Card>

        <Card 
          contentOrder={0}
          imgOrder={1}
          title='KidGames'
          subtitle='Desenvolvimento de Games'
          subtitleColor='#455A64'
          link='#'
          text='O curso KidGames® é formado por módulos onde os alunos aprendem a utilizar as mesmas ferramentas utilizadas pela indústria mundial dos games. Enquanto desenvolvem projetos de jogos, os alunos criam habilidades como criatividade, raciocínio lógico, resolução de problemas e trabalho em equipe. Apresentamos ao aluno a possibilidade de se aprofundar em áreas de UX (experiência do usuário) e Engine (programação do jogo).'
        >
          <Image src={ GamesImg } placeholder='blur' width={400} height={400}/>
        </Card>

        <Card 
          contentOrder={1}
          imgOrder={0}
          title='KidApp'
          subtitle='Desenvolvimento de Apps'
          subtitleColor='#455A64'
          link='#'
          text='Nosso curso KidApp® conta com tecnologia desenvolvida pelo Instituto de Tecnologia de Massachusets (MIT). Os alunos irão aprender conceitos básicos de eletrônica e do funcionamento dos dispositivos integrados nos celulares Android, por meio da construção de apps, através de linguagem de programação de blocos em uma plataforma simples onde os alunos poderão publicar os seus aplicativos.'
        >
          <Image src={ AppImg } placeholder='blur' width={400} height={400}/>
        </Card>


      </article>
    </section>
  )
}