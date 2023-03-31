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

    const typeOfFurnishings = [
        {
            type: 'sala',
            link: '/'
        },
        {
            type: 'cozinha',
            link: '/'
        },
        {
            type: 'banheiro',
            link: '/'
        },
        {
            type: 'quarto',
            link: '/'
        },
        {
            type: 'área de lazer',
            link: '/'
        },

    ]

    const menuWithClick=()=>{
        const menu = document.querySelector('.types-of-furnishings');
        menu.classList.toggle('open')
    }
    const activeMenu = () => {
        const menu = document.querySelector('.types-of-furnishings');
        menu.style.opacity = "1"
    }
    const inactiveMenu = () => {
        const menu = document.querySelector('.types-of-furnishings');
        menu.style.opacity = "0"
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

                            {props.itens.map(item =>
                                <a href={'#'} key={item}>
                                    <li 
                                        onClick={item == 'Moveis' ? menuWithClick : null}
                                        onMouseLeave={item == 'Moveis' ? inactiveMenu : null}
                                        onMouseOver={item == 'Moveis' ? activeMenu : null}
                                        id={item}>{item}

                                        {
                                            item == 'Moveis' ?
                                                <ul className='types-of-furnishings'>
                                                    {typeOfFurnishings.map(item => <li key={item.type}>{item.type}</li>)}
                                                    </ul>
                                                : ''

                                        }

                                    </li></a>
                            )}

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