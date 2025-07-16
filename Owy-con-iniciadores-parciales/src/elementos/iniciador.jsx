function Iniciador({ className, prompt }) {
  const handleClick = () => {
    console.log("Botón clickeado");
  };

  return (
    <div className={className}>
      <div className="img-iniciador" />
      <span className="text-iniciador">{prompt}</span>
    </div>
  );
}
export default Iniciador;
