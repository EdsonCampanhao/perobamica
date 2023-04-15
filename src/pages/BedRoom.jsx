import Header from "components/Header"
import Footer from "components/Footer"
import '../App.css';
import pics from "components/Galery/pics";
import GaleryOfPages from "components/GaleryOfPages";


const BedRoom = () => {
    return (
        <section>
            <header>
                <Header />
            </header>
            <main>
                <GaleryOfPages pics={pics.BedRoom} />
            </main>
            <footer>
                <Footer />
            </footer>
        </section>
    )
}

export default BedRoom