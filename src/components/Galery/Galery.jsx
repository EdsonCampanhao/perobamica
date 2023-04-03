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
        label='https://uploaddeimagens.com.br/images/004/370/725/original/reck.jpg?1677586640' 
        labelTitle='sala' 
        pics={pics.livingRoom} 
        />
        <SectionGalery 
        label='https://uploaddeimagens.com.br/images/004/370/695/original/banheiro.jpg?1677586104' 
        labelTitle='banheiro' 
        pics={pics.bathRoom} 
        />
        <SectionGalery 
        label='https://uploaddeimagens.com.br/images/004/370/690/original/armario2.jpg?1677586055' 
        labelTitle='quarto' 
        pics={pics.bedRoom} 
        />
      


        </section>
    )
}

export default Galery