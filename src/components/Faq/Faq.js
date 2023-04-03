import './Faq.css'
import iconFaq from './icon-faq.png'

const Faq = () => {

const open=(event)=>{
    const classListOfAnswer=event.target.nextSibling.classList;
    const iconOfArrow= event.target.classList;

    classListOfAnswer.toggle('desabled');
    iconOfArrow.toggle('invert');

}


    return (
        <>
            <h2 className='faq__title'> Perguntas frequentes</h2>
            <div className="faq__cards">
                <article className="faq__info">
                    <h3 className="faq__titulo">Vocês parcelam o serviço</h3>
                    <img src={iconFaq} onClick={open} alt="" className="faq__icone" />
                    <p className="faq__resposta desabled">Sim, parcelamos em até 12x com os juros do cartão.</p>
                </article>
                <article className="faq__info">
                    <h3 className="faq__titulo">Qual o tipo de material usado nos móveis?</h3>
                    <img src={iconFaq} alt="seta de abertura da sanfona" onClick={open}  className="faq__icone" />
                    <p className="faq__resposta desabled">Usamos madeira, mdf e compensado, à depender da opção do cliente.</p>
                </article>
                <article className="faq__info">
                    <h3 className="faq__titulo">Pagando a vista tem desconto?</h3>
                    <img src={iconFaq} alt="seta de abertura da sanfona" onClick={open}  className="faq__icone" />
                    <p className="faq__resposta desabled">Pagamento no pix ou no dinheiro recebe um desconto de 5%.</p>
                </article>
                <article className="faq__info">
                    <h3 className="faq__titulo">Em quanto tempo o serviço é executado?</h3>
                    <img src={iconFaq} alt="seta de abertura da sanfona" onClick={open}  className="faq__icone" />
                    <p className="faq__resposta desabled">Depende do tipo e quantidade do serviço, mas a instalação costuma ser rápida, variando apenas a produção dos móveis em específico.</p>
                </article>
            </div>
        </>
    )
}

export default Faq