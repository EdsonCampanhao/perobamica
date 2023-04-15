import Header from "components/Header"
import Footer from "components/Footer"
import '../App.css';
import pics from "components/Galery/pics";
import GaleryOfPages from "components/GaleryOfPages";


const BathRoom = () => {
    return (
        <section>
            <header>
                <Header />
            </header>
            <main>
               
                <GaleryOfPages pics={pics.BathRoom} />
            </main>
            <footer>
                <Footer />
            </footer>
        </section>
    )
}

export default BathRoom