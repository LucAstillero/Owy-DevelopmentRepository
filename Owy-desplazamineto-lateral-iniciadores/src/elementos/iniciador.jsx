import orangeSquare from "../assets/images/orange.svg";

function Iniciador({ prompt, onClick }) {
  return (
    <button onClick={onClick} className="iniciador">
      <img src={orangeSquare} className="img-iniciador" />
      <span className="text-iniciador">{prompt}</span>
    </button>
  );
}
export default Iniciador;
