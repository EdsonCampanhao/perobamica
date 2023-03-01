import './Carousel.css'


const Carousel = (props) => {

    const selectImage = (e) => {

        const unselectedDivs = e.target.parentNode.childNodes;
        let selectedDiv = e.target.classList;

        unselectedDivs.forEach(element => {
            if (element.classList.contains('selected')) {
                element.classList.remove('selected')
            }
        }
        )

        selectedDiv.toggle('selected')
    }


    return (
        <>
            <h2 className='carousel-title' id='carousel-title'>{props.title}</h2>

            <section className='carousel'>
                <div className='gallery' id='gallery'>
                    {props.imagens.map((image, index) => <div key={index}
                        onClick={selectImage}
                        style={{ backgroundImage: image }}></div>)}
                </div>
            </section>
        </>
    )
}

export default Carousel