
import './CampoTexto.css'

const TextField= (props)=>{

    const aoDigitar=(evento)=>{
       props.aoAlterado(evento.target.value)
    }

    return(
        <div className="campo-texto">
        <label>{props.label}</label>
        <input  value={props.valor} accept={props.accept} type={props.type} required={props.obrigatorio} name={props.name} onChange={aoDigitar} placeholder={`${props.placeholder}...`}></input>
        </div>
        
        )
}
export default TextField;