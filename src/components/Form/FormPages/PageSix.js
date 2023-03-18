import React from 'react'

function PageSix({ formData, setFormData }) {
  const BrazilStates = [
    {name: 'Acre'},
    {name: 'Alagoas'},
    {name: 'Amapá'},
    {name: 'Amazonas'},
    {name: 'Bahia'},
    {name: 'Ceará'},
    {name: 'Espírito Santo'},
    {name: 'Goiás'},
    {name: 'Maranhão'},
    {name: 'Mato Grosso'},
    {name: 'Mato Grosso do Sul'},
    {name: 'Minas Gerais'},
    {name: 'Pará'},
    {name: 'Paraíba'},
    {name: 'Paraná'},
    {name: 'Pernambuco'},
    {name: 'Piauí'},
    {name: 'Rio de Janeiro'},
    {name: 'Rio Grande do Norte'},
    {name: 'Rio Grande do Sul'},
    {name: 'Rondônia'},
    {name: 'Roraima'},
    {name: 'Santa Catarina'},
    {name: 'São Paulo'},
    {name: 'Sergipe'},
    {name: 'Tocantins'},
    {name: 'Distrito Federal'},
  ]

  return (
    <div className='pageForm_six'>
      <h2>Endereço residencial</h2>
      <div className='pageForm_six_row'>
        <label htmlFor='CEP'>CEP do seu endereço <span className='inpunt__required'>*</span></label>
        <input
          type="text"
          id="CEP"
          value={formData.CEP}
          onChange={(e) => {setFormData({...formData, CEP: e.target.value})}}
        />
      </div>
      <div className='pageForm_six_row'>
        <label htmlFor='addressStreet'>Nome da Rua <span className='inpunt__required'>*</span></label>
        <input
          id='addressStreet'
          type="text"
          value={formData.addressStreet}
          onChange={(e) => {setFormData({...formData, addressStreet: e.target.value})}}
        />
      </div>
      <div className='pageForm_six_row'>
        <label htmlFor='addressNumber'>Número</label>
        <input
          id="addressNumber"
          type="number"
          value={formData.addressNumber}
          onChange={(e) => {setFormData({...formData, addressNumber: e.target.value})}}
        />
      </div>
      <div className='pageForm_six_row'>
        <label htmlFor='addressComp'>Complemento<span className='inpunt__required'>*</span></label>
        <div className='littleInfos'>Número do apartamento, sala ou torre se houver</div>
        <input
          type="text"
          id="addressComp"
          value={formData.addressComp}
          onChange={(e) => {setFormData({...formData, addressComp: e.target.value})}}
        />
      </div>
      <div className='pageForm_six_row'>
        <label htmlFor='neighborhood'>Bairro <span className='inpunt__required'>*</span></label>
        <input
          id="neighborhood"
          type="text"
          value={formData.neighborhood}
          onChange={(e) => {setFormData({...formData, neighborhood: e.target.value})}}
        />
      </div>
      <div className='pageForm_six_row'>
        <label htmlFor='addressCity'>Cidade <span className='inpunt__required'>*</span></label>
        <input
          id="addressCity"
          type="text"
          value={formData.addressCity}
          onChange={(e) => {setFormData({...formData, addressCity: e.target.value})}}
        />
      </div>
      <div className='pageForm_six_row'>
        <label htmlFor='addressState'>Estado <span className='inpunt__required'>*</span></label>
        <select
          name="addressState"
          value={formData.addressState}
          onChange={(e) => {setFormData({...formData, addressState: e.target.value})}}
        >
          <option value="">Selecionar...</option>
          {BrazilStates.map((states, index) => {
            return (
              <option key={index} value={states.name}>{states.name}</option>
            )
          })}
        </select>
      </div>
      <div className='pageForm_six_row'>
        <label htmlFor='addressTime'>Há quanto tempo que já esta neste endereço? <span className='inpunt__required'>*</span></label>
        <input
          id='addressTime'
          type="text"
          value={formData.addressTime}
          onChange={(e) => {setFormData({...formData, addressTime: e.target.value})}}
        />
      </div>
      <div className='pageForm_six_row'>
        <label htmlFor='ownRent'>Própria ou Locada? <span className='inpunt__required'>*</span></label>
        <select
          value={formData.ownRent}
          onChange={(e) => {
            setFormData({...formData, ownRent: e.target.value})
          }}
        >
          <option value="">Selecionar...</option>
          <option value="Própria">Própria</option>
          <option value="Alugada">Alugada</option>
        </select>
      </div>
    </div>
  )
}

export default PageSix