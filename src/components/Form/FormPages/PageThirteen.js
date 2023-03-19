import React from 'react'

function PageThirteen({ formData, setFormData }) {
  return (
    <div>
        <div className='pageForm_thirteen'>
        <h2>Referências Pessoais 2</h2>
        <div className='pageForm_thirteen_row form_input'>
            <label htmlFor='personalRefTwoName'>Nome <span className='inpunt__required'>*</span></label>
            <input
                type="text"
                id='personalRefTwoName'
                value={formData.personalRefTwoName}
                onChange={(e) => setFormData({...formData, personalRefTwoName: e.target.value})}
            />
        </div>
        <div className='pageForm_thirteen_row form_input'>
            <label htmlFor='personalRefTwoPhone'>Telefone <span className='inpunt__required'>*</span></label>
            <input
                type="tel"
                id='personalRefTwoPhone'
                value={formData.personalRefTwoPhone}
                onChange={(e) => setFormData({...formData, personalRefTwoPhone: e.target.value})}
            />
        </div>
    </div>
    </div>
  )
}

export default PageThirteen