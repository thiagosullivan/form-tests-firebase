import React from 'react'

function PageSeven({ formData, setFormData }) {
  return (
    <div className='pageForm_seven'>
      <h2>Locado</h2>
      <div className='pageForm_seven_row form_input'>
        <label>Informe o nome da imobiliária ou proprietário do imóvel.</label>
        <input
          type="text"
          value={formData.rentName}
          onChange={(e) => {setFormData({...formData, rentName: e.target.value})}}
        />
      </div>
      <div className='pageForm_seven_row form_input'>
        <label>Telefone da imobiliária ou proprietário</label>
        <input
          type="tel"
          value={formData.rentPhone}
          onChange={(e) => {setFormData({...formData, rentPhone: e.target.value})}}
        />
      </div>
    </div>
  )
}

export default PageSeven