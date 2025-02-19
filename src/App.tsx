import Logo from './assets/logo-andrade-costa.png'; // Importe a imagem do logoimport React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Social from './components/Social';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Team />
      <Social />
      <Contact />
    </div>
  );
}

export default App;
