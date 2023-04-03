
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
     <Header itens={[ 'Inicio','Orçamento','Moveis']}/>
      <HeroSection title='PerobaMica' text=' Tornando a sua casa um ambiente mais agradável e refinado'
         />
      <About title='Bem vindos ao site de moveis planejados da Perobamica' text='Somos uma empresa especializada na confecção de Armarios embutidos, 
      cozinhas planejadas e desenhos 3D, tudo feito sob medida!
      '/>
      <WppButton number='+552198775-5458' />
      <Galery/>
      <Faq/>
      <Form />
      <Footer
        number='(21)-30496746/98775-5458'
        email='perobamica@hotmail.com'
        adress='Rua Fernando Galiane, lt: 06 qd: 161- Jardim Catarina'
        uf='São Gonçalo-RJ'
        hrefWpp='https://wa.me/+552198775-5458'
        hrefIg='https://www.instagram.com/perobamica/'
        hrefFace=''
      />
    </div>
  );
}

export default Home;
