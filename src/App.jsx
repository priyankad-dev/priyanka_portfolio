import Nav from './components/Nav'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Stats from './sections/Stats'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Expertise from './sections/Expertise'
import Credentials from './sections/Credentials'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50
                   focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:font-medium focus:text-bg"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <Stats />
        <About />
        <Expertise />
        <Skills />
        <Experience />
        <Projects />
        <Credentials />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
