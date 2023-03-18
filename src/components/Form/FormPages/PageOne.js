import React, { useState } from 'react';

function PageOne({ formData, setFormData }) {
  // const [ emptyField, setEmptyField ] = useState();

  return (
    <div className='pageOne_form'>
      <p>Olá, tudo bem? <br/> 
      Este é o formulário para preenchimento de dados e envio de documentação da Century21.<br/>
      Antes de iniciar o preenchimento, verifique se o seu corretor já iniciou seu processo. </p>
      <div className='pageOne_form_bottom'>
        <p>Qual cadastro você gostaria de preencher? <span className='inpunt__required'>*</span></p>
        <div className='pageOne_form_inputs'>
          <div>
            <input
              type="radio"
              name="formType"
              id="locatario"
              value="locatario"
              required
              checked={formData.typeForm === "locatario" ? true : false}
              onChange={(e) => {
                setFormData({...formData, typeForm: e.target.value});
              }}
              />
            <label htmlFor="locatario">Locatário</label>            
          </div>
          <div>
            <input
              type="radio"
              name="formType"
              id="fiador"
              value="fiador"
              required
              checked={formData.typeForm === "fiador" ? true : false}
              onChange={(e) => {
                setFormData({...formData, typeForm: e.target.value});
              }}              
            />
            <label htmlFor="fiador">Fiador</label>
          </div>
          <div>
            <input
              type="radio"
              name="formType"
              id="proprietario"
              value="proprietario"
              required
              checked={formData.typeForm === "proprietario" ? true : false}
              onChange={(e) => {
                setFormData({...formData, typeForm: e.target.value});
              }}
            />
            <label htmlFor="proprietario">Proprietário</label>
          </div>
          {/* {emptyField && <p>Este campo está vazio</p>} */}
        </div>
      </div>
    </div>
  )
}

export default PageOne