import React from 'react'

import { Header } from '../../components/Header';
import { Order } from '../../components/Order';


export function Create_Orden() {
  return (
   <>
    <div className="container">
      <Header props='New Order' />
    </div>
    <Order />
   </>
  )
}
