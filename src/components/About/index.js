import './About.css'

const About=(props)=>{
    return( 

        <div className='about'>
                {/* introdução ao site */}
            <h2>{props.title}</h2>
            <p>{props.text}</p>

        </div>

    )
}

export default About;