
import './App.css';
import Navbar from './components/nav/Navbar'
import Header from './components/header/Header'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Testemonials from './components/testemonials/Testemonials'
import Footer from './components/footer/Footer'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'




function App() {
  return (

    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testemonials />
      <Contact />
      <Footer />
    </>

  );
}

export default App;
