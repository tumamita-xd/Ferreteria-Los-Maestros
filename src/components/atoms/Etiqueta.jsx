function label(props){
    return (
        <label htmlFor = {props.htmlFor} className = "form-label font-weight-bold">
            {props.texto}
        </label>
    )
}