import React, { useEffect, useState } from 'react';
import { useAuth } from "../../context/AuthContext";
import { useHistory } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import './styles.css'

import { Header } from '../../components/Header'

export function Home() {
  const history = useHistory();

  function handleNewOrder() {
    history.push('/newOrder')
  }


  return(
    <>
    <div className="container">
      <Header props='home' />
    </div>
    <main>
    <div className="addArea">
      <div className="mainArea">
        <h1>Lista de orden</h1>
      </div>

      <div className="mainActions">
          <p onClick={handleNewOrder}>Cadastra uma  Ordem</p>
        </div>
    </div>
    </main>

    <section>
      <h1>Cadastrando uma orden</h1>
    </section>

    <section>
    <div className="order">
     <table border='0'>
      <thead>
        <tr>
          
          <th>Nome:</th>
          <th>Serviços:</th>
          <th>Valor:</th>
          <th>Data:</th>
          <th>Situação:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Thiago do nascimento morgado</td>
          <td>manutençao laptop, valor  problema apresentado.. </td>
          <td>R$ 250,00</td>
          <td>01/02/2020</td>
          <td className='actionsBtn'>
            <p className='btn_Edit'>Abrir Orden</p> 
          </td>
        </tr>
        
      </tbody>
     </table>
    </div>
    </section>
  </>
  )
}