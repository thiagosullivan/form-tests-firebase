import React from 'react'

function PageEight({ formData, setFormData }) {
  return (
    <div className='pageForm_eight'>
      <h2>Cadastro de Renda</h2>
      <div className='pageForm_eight_row form_input'>
        <label htmlFor='rentCompany'>Nome da empresa <span className='inpunt__required'>*</span></label>
        <input
          id='rentCompany'
          type="text"
          value={formData.rentCompany}
          onChange={(e) => setFormData({...formData, rentCompany: e.target.value})}
        />
      </div>
      <div className='pageForm_eight_row form_input'>
        <label htmlFor='jobTime'>Tempo de registro ou trabalho <span className='inpunt__required'>*</span></label>
        <input
          id='jobTime'
          type="text"
          value={formData.jobTime}
          onChange={(e) => setFormData({...formData, jobTime: e.target.value})}
        />
      </div>
      <div className='pageForm_eight_row form_input'>
        <label htmlFor='jobRole'>Seu Cargo <span className='inpunt__required'>*</span></label>
        <input
          id='jobRole'
          type="text"
          value={formData.jobRole}
          onChange={(e) => setFormData({...formData, jobRole: e.target.value})}
        />
      </div>
      <div className='pageForm_eight_row form_input'>
        <label htmlFor='companyAddress'>Endereço da empresa <span className='inpunt__required'>*</span></label>
        <input
          id="companyAddress"
          type="text"
          value={formData.companyAddress}
          onChange={(e) => setFormData({...formData, companyAddress: e.target.value})}
        />
      </div>
      <div className='pageForm_eight_row form_input'>
        <label htmlFor='companyPhone'>Número de Telefone da empresa <span className='inpunt__required'>*</span></label>
        <input
          id='companyPhone'
          type="tel"
          value={formData.companyPhone}
          onChange={(e) => setFormData({...formData, companyPhone: e.target.value})}
        />
      </div>
      <div className='pageForm_eight_row form_input'>
        <label htmlFor='provenRent'>Renda Comprovada <span className='inpunt__required'>*</span></label>
        <div className='littleInfos'>Renda que comprovará na documentação.</div>
        <input
          id="provenRent"
          type="number"
          value={formData.provenRent}
          onChange={(e) => setFormData({...formData, provenRent: e.target.value})}
        />
      </div>
      <div className='pageForm_eight_row form_input'>
        <label htmlFor='extraRent'>Renda Extra</label>
        <div className='littleInfos'>Renda que deve ser comprovada, porém de fontes alternativas de receita por exemplo: Bônus, Aluguéis e etc.</div>
        <input
          id='extraRent'
          type="number"
          value={formData.extraRent}
          onChange={(e) => setFormData({...formData, extraRent: e.target.value})}
        />
      </div>
    </div>
  )
}

export default PageEight