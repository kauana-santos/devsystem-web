
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Login from "../Pages/Login";
import Sobre from "../Pages/Sobre";
import Navbar from "../Components/Navbar";
import HomeLogada from "../Pages/HomeLogada";
import Pessoas from "../Pages/Pessoas";

export default function Router() {
  const logado = sessionStorage.getItem("logado") === "true";

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
        path="/"
        element={
          logado === "true" 
          ? <Navigate to="/homeLogado" />
          : <Login/> 
        } 
        
      />

        <Route path="/sobre" element={<Sobre />} />

        <Route
          path="/homeLogado"
          element={
            logado ? <HomeLogada /> : <Navigate to="/" replace />
          }
        />

        <Route path="pessoas" element={
          sessionStorage.getItem("logado") === "true"
          ? <Pessoas />
          : <Navigate to="/" replace />
        }/>

        {/* Redireciona rotas inexistentes para pagina inicial */}
        <Route path="*" element={<Navigate to="/homeLogado" replace/>}/>
      </Routes>
    </BrowserRouter>
  );
}
