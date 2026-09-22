import LayoutPrincipal from '../components/templates/LayoutPrincipal';
import FormularioLogin from '../components/organisms/FormularioLogin';
import LayoutPrincipal from '../components/templates/LayoutPrincipal';

function PaginaLogin() {
  const handleLogin = (datos) => {
    console.log('Datos listos para enviar al backend:', datos);
  };

  return (
    <LayoutPrincipal
      titulo="Iniciar Sesión"
      subtitulo="Ingresa tus credenciales para acceder"
      formulario={<FormularioLogin onSubmit={handleLogin} />}
      textoPie="¿No tienes una cuenta?"
      textoEnlacePie="Regístrate"
      enlacePieHref="#register"
    />
  );
}

export default PaginaLogin;