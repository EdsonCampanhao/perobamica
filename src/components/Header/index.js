import { Link } from 'react-router-dom';
import './Header.css'
import './MenuIcon.css'


const Header = (props) => {


    const menu = ['Inicio', 'Orçamento', 'Móveis'];
    const typeOfFurnishings = [
        {
            type: 'sala',
            link: '/livingroom'
        },
        {
            type: 'cozinha',
            link: '/kitchen'
        },
        {
            type: 'banheiro',
            link: '/bathroom'
        },
        {
            type: 'quarto',
            link: '/bedroom'
        },
    ]

    const switchMenu = (event) => {

        const container = document.querySelector('.lista');

        if (event.target.attributes.length > 1) {
            event.target.classList.toggle('on')
            container.classList.toggle('on')
        } else {
            event.target.parentNode.classList.toggle('on');
            container.classList.toggle('on')
        }
    }

    const menuWithClick = () => {
        const menu = document.querySelector('.types-of-furnishings');
        menu.classList.toggle('open')
    }
    const activeMenu = () => {
        const menu = document.querySelector('.types-of-furnishings');
        menu.style.opacity = "1"
        console.log('alo')
    }
    const inactiveMenu = () => {
        const menu = document.querySelector('.types-of-furnishings');
        menu.style.opacity = "0"
    }

    return (
        <section className='header'>
            <div className="lista">
                <div className="menu">
                    <div className='menu-hamburguer' data-menu='2' onClick={switchMenu}>
                        <div >
                        </div>
                        <div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <nav>
                        <ul className="lista__lista ">
                            {menu.map(item =>
                                <Link onClick={switchMenu} to={item !== 'Móveis' ? item === 'Inicio' ? '/' : `/${item}` : '#'
                                } key={item}>
                                    <li
                                        onClick={item === 'Móveis' ? menuWithClick : null}
                                        onMouseLeave={item === 'Móveis' ? inactiveMenu : null}
                                        onMouseOver={item === 'Móveis' ? activeMenu : null}
                                        id={item}>{item}

                                        {
                                            item === 'Móveis' ?
                                                <ul className='types-of-furnishings'>
                                                    {typeOfFurnishings.map(item => <Link to={item.link} > <li key={item.type}>{item.type}</li></Link>)}
                                                </ul>
                                                : ''

                                        }

                                    </li>
                                </Link>
                            )}

                        </ul>
                    </nav>
                </div>


            </div>
            <Link to='/'>
                <div className='logo'>
                    <img className='alt' alt='icone logo'></img>
                </div>
            </Link>
        </section >
    )
};

export default Header;