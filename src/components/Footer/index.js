import faceIcon from './img/face.png';
import instaIcon from './img/ig.png';
import wppIcon from './img/wpp.png'
import './Footer.css';

const Footer = (props) => {
    return (
        <section className="rodape" id='rodape'>
            <div className='container'>
                <div className="rodape__info">
                    <div className='contatos'>
                        <h3>contatos</h3>
                        <p>{props.number}</p>
                        <p>{props.email}</p>
                    </div>
                    <div className='adress'>
                        <p >{props.adress}</p>
                        <p >{props.uf}</p>
                    </div>
                </div>
                <div className="links">
                </div>
                <div className="contato__redes_sociais">
                    <a href={props.hrefWpp}><img src={wppIcon} alt="" /></a> 
                    <a href={props.hrefIg}><img src={instaIcon}alt="" /></a>
                   <a href={props.hrefFace}><img src={faceIcon}alt="" /></a>
                </div>
            </div>
        </section>
    )
}

export default Footer