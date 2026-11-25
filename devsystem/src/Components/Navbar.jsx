import { Link } from "react-router-dom";
import "../Styles/Navbar.scss"

export default function Navbar() {
  const logado = sessionStorage.getItem("logado")

  function sair(){
    //removce a autentivcacao
    sessionStorage.removeItem(logado)

    //redireciona para o login
    window.location.replace('/')
  }
  
  return (
    <nav>
        <section className="container">
            {logado !== "true" && (
              <>
                <Link to="/">Login</Link>
              </>
            )}
            
            <Link to="/sobre">Sobre</Link>
            {logado === "true" &&(
              <>
                <button className="btn-sair" onClick={sair}>Sair</button>
              </>
            )}


            
        </section>
    </nav>
  )
}
