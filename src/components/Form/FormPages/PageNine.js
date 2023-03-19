import React from 'react'

function PageNine({ formData, setFormData}) {
  return (
    <div className='pageForm_nine'>
      <h2>Estado civil do cliente</h2>
      <div className='pageForm_nine_row form_input'>
        <label>Estado Civil <span className='inpunt__required'>*</span></label>
        <select value={formData.maritalStatus} onChange={(e) => setFormData({...formData, maritalStatus: e.target.value})}>
          <option value="">Selecionar...</option>
          <option value="Solteiro">Solteiro</option>
          <option value="Casado">Casado</option>
          <option value="Divorciado">Divorciado</option>
          <option value="Viúvo">Viúvo</option>
          <option value="Outros">Outros</option>
        </select>
      </div>
    </div>
  )
}

export default PageNine