import Conteudo from "./Conteudo";

function Calculo() {
  const [altura, setAltura] = useState(1.65);
  const [peso, setPeso] = useState(65);

  const calculadora = peso / altura ** 2;

  return (
    <>
      <Conteudo calcularImc={calculadora} />
    </>
  );
}

export default Calculo;
