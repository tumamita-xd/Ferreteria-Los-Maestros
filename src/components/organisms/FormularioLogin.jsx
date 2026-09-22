import { useState } from 'react';
import Formulario from '../molecules/Formulario';
import Boton from '../atoms/Boton';

function FormularioLogin(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      props.onSubmit({ email, password });
    }
    setValidated(true);
  };

  const enlaceOlvidaste = (
    <a href="#forgot" className="btn-link small">
      ¿Olvidaste tu contraseña?
    </a>
  );

  return (
    <form className={`needs-validation ${validated ? 'was-validated' : ''}`} noValidate onSubmit={handleSubmit}>
      <Formulario
        id="email"
        textoEtiqueta="Correo electrónico"
        tipo="email"
        placeholder="ejemplo@correo.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        textoError="Por favor, ingresa un correo electrónico válido."
        required={true}
      />

      <Formulario
        id="password"
        textoEtiqueta="Contraseña"
        tipo="password"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        textoError="Por favor, ingresa tu contraseña."
        enlaceDerecho={enlaceOlvidaste}
        required={true}
      />

      <div className="mt-4">
        <Boton tipo="submit" variante="primary" texto="Ingresar" />
      </div>
    </form>
  );
}

export default FormularioLogin;