import './HeroSection.css'

const HeroSection = (props) => {

    return (


        
        
            <section className='hero-section' style={{backgroundImage:(props.image)}}>

                {props.image.map(image=><div style={ {backgroundImage:(image)}}></div>)}

                <div>
                    <h1 className='text-gradiente'> {props.title} </h1>
                    <p>{props.text}</p> 
                    <div className='link-container'>
                        <div className='link-img'>
                            <a href='https://api.whatsapp.com/send/?phone=%2B5521987004539&text&type=phone_number&app_absent=0' className='link-txt'> {props.invite}</a></div></div>

                </div>

            </section>
     

    )

}

export default HeroSection