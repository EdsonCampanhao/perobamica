import Header from "components/Header"
import Footer from "components/Footer"
import Form from "components/Form"
import '../App.css';




const Budget = () => {
    return (
        <section>
           <Header itens={[ 'Inicio','Orçamento','Moveis']}/>

            <Form/>

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

export default Budget