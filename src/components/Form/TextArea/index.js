import './TextArea.css'

const TextArea=(props)=>{

    const aoDigitar=(evento)=>{
        props.aoAlterado(evento.target.value)
    }

    return(

        <div className="text-area">
        <label>{props.label}</label>
        <textarea  value={props.valor} name={props.name} required={props.obrigatorio} onChange={aoDigitar} placeholder={`${props.placeholder}...`}></textarea>
        </div>
        

    )
}
export default TextArea;