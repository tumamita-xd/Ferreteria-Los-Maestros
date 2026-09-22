import Etiqueta from '../atoms/Etiqueta';
import Input from '../atoms/Input';
import MensajeError from '../atoms/MensajeError';


function CampoFormulario(props) {
  return (
    <div className="form-group mb-3 text-start">
      <div className="d-flex justify-content-between align-items-center">
        <Etiqueta htmlFor={props.id} texto={props.textoEtiqueta} />
        {props.enlaceDerecho}
      </div>
      <Input
        tipo={props.tipo}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
      />
      {props.textoError && <MensajeError texto={props.textoError} />}
    </div>
  );
}

export default CampoFormulario;