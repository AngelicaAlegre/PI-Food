import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";

//Layout funciona como un contenedor. Dentro de este se van a renderizar todas nuestras paginas.
// Layout contendra todas las rutas necesarias.
const Layout = ({children}) => {
    return <div id="layout">
        {/* Aca tengo la barra de navegacion */}
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            </ul>
        </nav>
        {/* Aca tengo la lista de las rutas, si entro a localhost:3000/about, deberia mostrarme el componente About */}
        <hr />
        <Switch>
          <Route path="/about">
            <h1>Im the about</h1>
          </Route>
          <Route path="/users">
          <h1>Im the users</h1>
          </Route>
          <Route exact path="/home">
          <Home />
          </Route>
          {/* La ruta HOME o "/" siempre deberia ir lo mas abajo del todo posible */}
          <Route exact path="/">
          <Dashboard />
          </Route>
        </Switch>
    </div>;
}

export default Layout;
//
//En esta estiqueta (OUTLET) es donde se van a renderizar todas nuestras paginas