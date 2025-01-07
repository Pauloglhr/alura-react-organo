import './Inputs.css'

const Inputs = ({ type = 'text', valor, obrigatorio, placeholder, label, aoAlterado }) => {

    const aoDigitado = (evento) =>{
        aoAlterado(evento.target.value)
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input
                type={type}
                onChange={aoDigitado}
                value={valor}
                required={obrigatorio} 
                placeholder={placeholder}/>
        </div>
    )
}

export default Inputs