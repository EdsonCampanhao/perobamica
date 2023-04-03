import SectionGalery from "./SectionGalery/SectionGalery"
import pics from './pics'
import './Galery.css'

const Galery = () => {
    console.log(pics)
    return (
        <section className='galery'>

           
        <SectionGalery 
        label='https://uploaddeimagens.com.br/images/004/416/197/full/imagem_2023-04-03_114621140.png?1680533197' 
        labelTitle='Cozinha' 
        pics={pics.kitchen} 
        />
        <SectionGalery 
        label='https://uploaddeimagens.com.br/images/004/416/197/full/imagem_2023-04-03_114621140.png?1680533197' 
        labelTitle='sala' 
        pics={pics.kitchen} 
        />
        <SectionGalery 
        label='https://uploaddeimagens.com.br/images/004/416/197/full/imagem_2023-04-03_114621140.png?1680533197' 
        labelTitle='quarto' 
        pics={pics.kitchen} 
        />
      


        </section>
    )
}

export default Galery