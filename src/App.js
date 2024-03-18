import About from "./components/About"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Tours from "./components/Tours"
import Navbar from "./components/navbar"

function App() {
  return (
    <>
      <body>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Tours />
        <Footer />
      </body>
    </>
  )
}

export default App
