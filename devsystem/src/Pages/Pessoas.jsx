import React from 'react'
import "../Styles/Pessoas.scss"

export default function Pessoas() {
  return (
    <main className='container pessoas'>
      <h1>Lista de pessoas</h1>

      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1569</td>
                <td>Kauana Santos</td>
                <td>email</td>
            </tr>
        </tbody>
      </table>
    </main>

  )
}
