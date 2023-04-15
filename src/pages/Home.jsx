
import '../App.css';
import Header from 'components/Header/index';
import HeroSection from 'components/HeroSection'
import WppButton from 'components/WppButton';
import About from 'components/About';
import Carousel from 'components/Carousel';
import imgPath from 'components/Carousel/imgPath';
import Faq from 'components/Faq/Faq'
import Form from 'components/Form';
import Footer from 'components/Footer';
import Galery from 'components/Galery/Galery';



function Home() {

  return (
    <div className="App">
      <header>
        <Header />
        <HeroSection title='PerobaMica' text=' Tornando a sua casa um ambiente mais agradável e refinado'
        />
        <About title='Bem vindos ao site de moveis planejados da Perobamica' text='Somos uma empresa especializada na confecção de Armarios embutidos, 
      cozinhas planejadas e desenhos 3D, tudo feito sob medida!
      '/>
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
