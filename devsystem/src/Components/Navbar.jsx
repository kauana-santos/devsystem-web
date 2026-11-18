import { Link } from "react-router-dom";
import "../Styles/Navbar.scss"

export default function Navbar() {
  const logado = sessionStorage.getItem("logado")
  
  return (
    <nav>
        <section className="container">
            {logado !== "true" && (
              <>
                <Link to="/">Login</Link>
              </>
            )}
            <Link to="/sobre">Sobre</Link>
        </section>
    </nav>
  )
}
