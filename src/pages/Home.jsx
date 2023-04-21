
import '../App.css';
import Header from 'components/Header/index';
import HeroSection from 'components/HeroSection'
import WppButton from 'components/WppButton';
import About from 'components/About';
import Faq from 'components/Faq/Faq'
import Form from 'components/Form';
import Footer from 'components/Footer';
import Galery from 'components/Galery/Galery';



function Home() {

  return (
    <div className="App">
      <header>
        <Header />
        <HeroSection 
        />
        <About  />
      </header>

      <main>
        <WppButton number='+552198775-5458' />
        <Galery />
        <Faq />
        <div className='formContainer'>
          <Form />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
