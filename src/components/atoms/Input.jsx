function Input(props){
    return(
        <input
        type ={props.tipo || "text"}
        id = {props.id}
        className = "form-control"
        placeholder = {props.placeholder}
        value = {props.value}
        onChange={props.onChange}
        required  = {props.required} 
        />
    );
}

export default Input;