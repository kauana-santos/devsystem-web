import React, { useEffect, useState } from 'react'
import "../Styles/Pessoas.scss"
import axios from 'axios'

export default function Pessoas() {
    const [pessoas, setPessoas] = useState([])
    const [pagina, setPagina] = useState(1)

    useEffect(()=> {
        axios.get("http://localhost:3000/pessoas").then((res) => {
            setPessoas(res.data)
        })
    }, [])

    //configuração da pagina
    const itensPorPagina = 4;

    //calcula o indice inicial dos registros da pagina atual
    const inicio = (pagina - 1) * itensPorPagina;

    //calcula o indice finl dos registros da pagina atual
    const fim =inicio+itensPorPagina
    // separa os registros que serão exibidos na pagina atual
    const pessoasPagina = pessoas.slice(inicio,fim)    

    //calcula Quantidade Total de paginas
    const totalPagina = Math.ceil(pessoas.length / itensPorPagina)

  return (
    <main className='container pessoas'>
      <h1>Lista de pessoas</h1>

      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
            </tr>
        </thead>
        <tbody>
            {pessoasPagina.map(({id, nome, email, telefone})=> (
            <tr key={id}>
                <td>{id}</td>
                <td>{nome}</td>
                <td>{email}</td>
                <td>{telefone}</td>
            </tr>
            ))}
        </tbody>
      </table>

      <section>
        <button 
        onClick={()=> setPagina(pagina -1)}
        disabled={pagina === 1}>Anterior</button>
        <span>{" "} {pagina} de {totalPagina} {" "}</span>
        <button 
        onClick={()=> setPagina(pagina +1)}
        disabled={pagina === totalPagina}
        >Proximo</button>
      </section>
    </main>

  )
}
