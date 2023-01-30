import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <article>
      <h1> Pagina Inicial </h1>
      <Link to="/home">
        {/* Componente LINK - Generar una redireccion hacia una ruta */}
        <button>Ir a la ruta principal</button>
      </Link>
    </article>
  );
};

export default Dashboard;
