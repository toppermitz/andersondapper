import Header from '../components/Header'
import About from '../components/About'
import EasterEggWrapper from '../components/EasterEggWrapper'
import Stack from '../components/Stack'
// import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <main>
      <Header />
      <About />
      <EasterEggWrapper />
      <Stack />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </main>
  )
}
