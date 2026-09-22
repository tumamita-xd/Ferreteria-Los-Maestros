function MensajeError(props){
    return (
        <div className = "invalid-feedback">
            {props.texto}
        </div>

    )
}

export default MensajeError;