import React from 'react'

function PageFour({  formData, setFormData }) {
  return (
    <div className='pageFour_form'>
      <h2>Dados do imóvel</h2>
      <p>Confirme o imóvel para qual você deseja preencher os dados:</p>
      <div className='pageFour_form_row'>
        <p>Imóvel: <span className='inpunt__required'>*</span></p>
        <select
          value={formData.houseType}
          onChange={(e) => {
            setFormData({...formData, houseType: e.target.value});
          }}
        >
          <option
            name="houseType"
            value=""
          >
            Selecionar...
          </option>
          <option
            name="houseType"
            value="Opção 1"
          >
            Opção 1
          </option>
          <option
            name="houseType"
            value="Opção 2"
          >
            Opção 2
          </option>
        </select>
      </div>
      <div className='pageFour_form_row'>
        <p>Tipo de cadastro <span className='inpunt__required'>*</span></p>
        <div>
          <input
            type="radio"
            name="personType"
            id="PessoaFísica"
            value="Pessoa Física"
            checked={formData.personType === "Pessoa Física" ? true : false}
            onChange={(e) => {
              setFormData({...formData, personType: e.target.value});
            }}
          />
          <label htmlFor='PessoaFísica'>Pessoa Física</label>
        </div>
        <div>
          <input
            type="radio"
            name="personType"
            id="PessoaJurídica"
            value="Pessoa Jurídica"
            checked={formData.personType === "Pessoa Jurídica" ? true : false}
            onChange={(e) => {
              setFormData({...formData, personType: e.target.value});
            }}
          />
          <label htmlFor='PessoaJurídica'>Pessoa Jurídica</label>
        </div>
      </div>
    </div>
  )
}

export default PageFour