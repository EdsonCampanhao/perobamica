import './Header.css'
import './MenuIcon.css'
import logo from './logo.png'

const Header = (props) => {
    const openMenu = (event) => {
        const container = document.querySelector('.lista');
        if (event.target.attributes.length > 1) {
            event.target.nextSibling.classList.toggle('desabled')
            event.target.classList.toggle('on')
            container.classList.toggle('on')
        } else {
            event.target.parentNode.nextSibling.classList.toggle('desabled');
            event.target.parentNode.classList.toggle('on');
            container.classList.toggle('on')
        }
    }



    return (
        <section className='header'>
            <div className="lista">

                <div className="menu">

                    <div className='menu-hamburguer' data-menu='2' onClick={openMenu}>
                        <div >
                        </div>
                        <div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <nav>
                    <ul className="lista__lista desabled">
                        {props.itens.map((item,index)=><li key={index}>{item}</li>)}
                    </ul>
                    </nav>
                </div>


            </div>
            
                <div className='logo'>
                    <img className='alt' alt='icone logo'></img>
                </div>

        </section >
    )
};

export default Header;