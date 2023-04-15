import Header from "components/Header"
import Footer from "components/Footer"
import Form from "components/Form"
import '../App.css';




const Budget = () => {
    return (
        <section>
            <header>
                <Header />
            </header>
            <main>
                <Form />
            </main>
            <footer>
                <Footer />
            </footer>
        </section>
    )
}

export default Budget