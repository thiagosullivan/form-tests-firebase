import React from 'react'

function PageTwelve({ formData, setFormData }) {
  return (
    <div className='pageForm_twelve'>
        <h2>Referências Pessoais 1</h2>
        <div className='pageForm_twelve_row form_input'>
            <label htmlFor='personalRefOneName'>Nome <span className='inpunt__required'>*</span></label>
            <input
                type="text"
                id='personalRefOneName'
                value={formData.personalRefOneName}
                onChange={(e) => setFormData({...formData, personalRefOneName: e.target.value})}
            />
        </div>
        <div className='pageForm_twelve_row form_input'>
            <label htmlFor='personalRefOnePhone'>Telefone <span className='inpunt__required'>*</span></label>
            <input
                type="tel"
                id='personalRefOnePhone'
                value={formData.personalRefOnePhone}
                onChange={(e) => setFormData({...formData, personalRefOnePhone: e.target.value})}
            />
        </div>
    </div>
  )
}

export default PageTwelve