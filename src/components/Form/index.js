import './Form.css'
import TextField from './TextField'
import { useState } from 'react'
import Button from './Button'
import TextArea from './TextArea'


const Form = (props) => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [detalhes, setDetalhes] = useState('');
    const [image, setImage] = useState('');

    const aoSalvar = (evento) => {
      
        console.log(props)

        let orçamento = {
            nome: nome,
            email: email,
            telefone: telefone,
            detalhes: detalhes,
            image: image,
        }

        console.log(orçamento)

        // props.aoColaboradorCadastrado({
        //     nome,
        //     email,
        //     telefone,


        // })
        // setNome('')
        // setEmail('')
        // setTelefone('')


    }
    return (
        <section className='formulario'>
            <form encType="multipart/form-data" onSubmit={aoSalvar} action="https://formsubmit.co/edsonlemos0525@gmail.com" method="POST">
                <h2>Faça um orçamento conosco, respondemos em até 24h</h2>
                <TextField
                    type='text'
                    name="name"
                    label='Nome'
                    obrigatorio={true}
                    placeholder='digite seu nome'
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <TextField
                    type='email'
                    name="email"
                    label='Email'
                    obrigatorio={true}
                    placeholder='ex: joão@gmail.com'
                    valor={email}
                    aoAlterado={valor => setEmail(valor)}
                />
                <TextField
                    type="tel"
                    name="tel"
                    label='Telefone'
                    placeholder='(xx) xxxxx-xxxx'
                    valor={telefone}
                    aoAlterado={valor => setTelefone(valor)}
                />
                <TextField
                    type="file"
                    name="attachment" 
                    accept="image/png, image/jpeg"
                    label='referência'
                    placeholder='envie-nos uma foto de referência'
                    valor={image}
                    aoAlterado={valor => setImage(valor)}
                />
                <TextArea
                    name="detalhes"
                    label='Detalhes'
                    placeholder='digite aqui os detalhes do serviço'
                    aoAlterado={valor => setDetalhes(valor)}
                />


                <Button type='submit'>enviar orçamento</Button>
            </form>
        </section>
    )
}

export default Form