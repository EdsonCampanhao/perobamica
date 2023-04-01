import Header from "components/Header"
import Footer from "components/Footer"



const ExternalArea = () => {
    return (
        <section>
           <Header itens={[ 'Inicio','Orçamento','Moveis']}/>

            <h1> finje que aqui estão as fotos </h1>

            <Footer
                number='(21)-30496746/98775-5458'
                email='perobamica@hotmail.com'
                adress='Rua Fernando Galiane, lt: 06 qd: 161- Jardim Catarina'
                uf='São Gonçalo-RJ'
                hrefWpp='https://wa.me/+552198775-5458'
                hrefIg='https://www.instagram.com/perobamica/'
                hrefFace=''
            />
        </section>
    )
}

export default ExternalArea