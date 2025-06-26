function Tarjeta() {
  // Definimos la información estática de la tarjeta
  const nombre = "Sergio Emmanuel";
  const profesion = "Estudiante de Doctorado";
  const mensaje = "Esta es mi tarjeta de presentación";

  // Retornamos el JSX que representa la tarjeta
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', width: '300px', textAlign: 'center' }}>
      {/* JSX permite incrustar variables en HTML utilizando llaves {} */}
      <h2>{nombre}</h2>
      <h4>{profesion}</h4>
      <p>{mensaje}</p>
    </div>
  );
}

export default Tarjeta;