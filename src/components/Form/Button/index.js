import'./Button.css'

const Button=(props)=>{
    return(
        <button className='Botao' type={props.type}> {props.children}</button>
    )
}

export default Button