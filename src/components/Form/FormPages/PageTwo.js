import React from 'react'

function PageTwo({ formData, setFormData }) {

  return (
    <div className='pageTwo_form'>
      {/* <input
        type="text"
        placeholder='Nome'
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        required
      /> */}
      <h2>Envie sua Selfie!</h2>
      <p>Essa validação é obrigatória. Caso você não consiga anexar uma selfie, informe seu corretor pois o não envio dessa informação pode acarretar em <strong>reprovação automática</strong>.</p>
      {/* <input
        type="file"
        onChange={(e) => setFormData(e.target.selfie[0])}
      /> */}
    </div>
  )
}

export default PageTwo