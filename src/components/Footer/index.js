import faceIcon from './img/face.png';
import instaIcon from './img/ig.png';
import wppIcon from './img/wpp.png'
import './Footer.css';

const Footer = (props) => {

    const contact=
   {
     number:'(21)-30496746/98775-5458',
    email:'perobamica@hotmail.com',
    adress:'Rua Fernando Galiane, lt: 06 qd: 161- Jardim Catarina',
    uf:'São Gonçalo-RJ',
    hrefWpp:'https://wa.me/+552198775-5458',
    hrefIg:'https://www.instagram.com/perobamica/',
    hrefFace:''
}

    return (
        <section className="rodape" id='rodape'>
            <div className='container'>
                <div className="rodape__info">
                    <div className='contatos'>
                        <h3>contatos</h3>
                        <p>{contact.number}</p>
                        <p>{contact.email}</p>
                    </div>
                    <div className='adress'>
                        <p >{contact.adress}</p>
                        <p >{contact.uf}</p>
                    </div>
                </div>
                <div className="links">
                </div>
                <div className="contato__redes_sociais">
                    <a href={contact.hrefWpp}><img src={wppIcon} alt="" /></a> 
                    <a href={contact.hrefIg}><img src={instaIcon}alt="" /></a>
                   <a href={contact.hrefFace}><img src={faceIcon}alt="" /></a>
                </div>
            </div>
        </section>
    )
}

export default Footer