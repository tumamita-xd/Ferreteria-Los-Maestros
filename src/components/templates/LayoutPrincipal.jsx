function LayoutPrincipal(props) {
  return (
    <main>
      <section>
        <div>
          <div>
            <h2>{props.titulo}</h2>
            <p>{props.subtitulo}</p>
          </div>

          {/* Aquí se renderiza el Organismo (Formulario) */}
          {props.formulario}

          <div>
            <p>
              {props.textoPie} <a href={props.enlacePieHref}>{props.textoEnlacePie}</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LayoutPrincipal;