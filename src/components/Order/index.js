import React from 'react';

export function Order(){
  return(
    <>
      <main>
        <div>
          <h1>Cadastro de um nova Orden</h1>
        </div>

        <section>
        <div className='formArea'>
        <p>Insiara o campos...</p>

        <form>
          <div className="formgroupHeade">
       

              <label htmlFor="">Nome:</label>
              <select id="cars" name="cars">
                <option value="volvo">Thiago morgado</option>
                <option value="saab">Luis Russo</option>
                <option value="fiat">Fernando morgado</option>
                <option value="audi">Adiconar novo cliente...</option>
              </select>


              <label htmlFor="">endereço:</label>
              <input type="text" name="andress" id="andress" />

              <label htmlFor="">Telefone:</label>
              <input type="phone" name="phone" id="phone" />

              <label htmlFor="">email:</label>
              <input type="mail" name="mail" id="mail" /> <br />
              
            
              <label htmlFor="">Nome:</label>
              <input type="text" name="name" id="name" />


              <label htmlFor="">Marca ou modelo:</label>
              <input type="text" name="models" id="models" />

              <label htmlFor="">Serviço:</label>
              <input type="text" name="" id="" />

              <label htmlFor="">Valor:</label>
              <input type="text" name="price" id="price" />
              
           
          </div>
        </form>


      </div>

        </section>
      </main>
    </>
  )
}