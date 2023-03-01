import './HeroSection.css'

const HeroSection = (props) => {
    
    const hero=document.querySelector('.hero-section');
    console.log(hero)

    return (

        <section className='hero-section' >

            <div     className='hero-img' >
                < div >
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                </div>

            </div>
        </section >


    )

}

export default HeroSection