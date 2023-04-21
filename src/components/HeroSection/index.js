import './HeroSection.css'

const HeroSection = (props) => {

    const hero = document.querySelector('.hero-section');
    console.log(hero)

    return (

        <section className='hero-section' >

            <div className='hero-img' >
                < div >
                    <h1>PerobaMica</h1>
                    <p> Tornando a sua casa um ambiente mais agradável e refinado</p>
                </div>

            </div>
        </section >


    )

}

export default HeroSection