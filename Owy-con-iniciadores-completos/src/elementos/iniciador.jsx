function Iniciador({ className, prompt, onClick }) {
  return (
    <button onClick={onClick} className={className}>
      <div className="img-iniciador" />
      <span className="text-iniciador">{prompt}</span>
    </button>
  );
}
export default Iniciador;
