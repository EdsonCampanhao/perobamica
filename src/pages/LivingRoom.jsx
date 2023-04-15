import Header from "components/Header"
import Footer from "components/Footer"
import '../App.css';
import GaleryOfPages from "components/GaleryOfPages";
import pics from 'components/Galery/pics'



const LivingRoom = () => {
    return (
        <section>
            <header>
                <Header />
                </header>
                <main>
                <GaleryOfPages pics={pics.livingRoom} />
                </main>
                <footer>
                <Footer />
                </footer>
        </section>
    )
}

export default LivingRoom