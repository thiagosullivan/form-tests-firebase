import React from 'react'

function PageFive({ formData, setFormData }) {
  return (
    <div className='pageFive_form'>
      <h2>Cadastro pessoal</h2>
      <div className='pageFive_form_row'>
        <label htmlFor='userName'>Nome <span className='inpunt__required'>*</span></label>
        <input
          id="userName"
          type="text"
          value={formData.userName}
          onChange={(e) => setFormData({...formData, userName: e.target.value})}
        />
      </div>
      <div className='pageFive_form_row'>
        <label htmlFor='cpf'>Número do CPF <span className='inpunt__required'>*</span></label>
        <input
          id="cpf"
          type="text"
          value={formData.userCPF}
          onChange={(e) => setFormData({...formData, userCPF: e.target.value})}
        />
      </div>
      <div className='pageFive_form_row'>
        <label htmlFor='rg'>Número do RG <span className='inpunt__required'>*</span></label>
        <input
          id="rg"
          type="text"
          value={formData.userRG}
          onChange={(e) => setFormData({...formData, userRG: e.target.value})}
        />
      </div>
      <div className='pageFive_form_row'>
        <label htmlFor='birthday'>Data de Nascimento <span className='inpunt__required'>*</span></label>
        <input
          id="birthday"
          type="text"
          value={formData.userBirth}
          onChange={(e) => setFormData({...formData, userBirth: e.target.value})}
        />
      </div>
      <div className='pageFive_form_row'>
        <label htmlFor='mothersName'>Nome da Mãe <span className='inpunt__required'>*</span></label>
        <input
          id="mothersName"
          type="text"
          value={formData.mothersName}
          onChange={(e) => setFormData({...formData, mothersName: e.target.value})}
        />
      </div>
      <div className='pageFive_form_row'>
        <label htmlFor='fathersName'>Nome do Pai <span className='inpunt__required'>*</span></label>
        <input
          id="fathersName"
          type="text"
          value={formData.fathersName}
          onChange={(e) => setFormData({...formData, fathersName: e.target.value})}
        />
      </div>
      <div className='pageFive_form_row'>
        <label htmlFor='email'>E-mail <span className='inpunt__required'>*</span></label>
        <div className='littleInfos'>Esse e-mail será usado na <strong>assinatura digital</strong>, por favor, preencha essa informação com atenção!</div>
        <input
          id="email"
          type="email"
          value={formData.userEmail}
          onChange={(e) => setFormData({...formData, userEmail: e.target.value})}
        />
      </div>
      <div className='pageFive_form_row'>
        <label htmlFor='phone'>Número de Telefone <span className='inpunt__required'>*</span></label>
        <input
          id="phone"
          type="tel"
          value={formData.userPhone}
          onChange={(e) => setFormData({...formData, userPhone: e.target.value})}
        />
      </div>
    </div>
  )
}

export default PageFive