import { HeaderContainer, Presentation,   Contact,  Courses, Notice } from '../../components'



export const HomePage = () => {
  return (
    <main>
        <HeaderContainer />
        <Presentation />
        <Notice />
        <Courses />
        <Contact />
    </main>
  )
}