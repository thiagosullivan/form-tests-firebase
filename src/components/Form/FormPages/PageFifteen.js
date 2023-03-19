import React from 'react'

function PageFifteen({ formData, setFormData, onusImg, setOnusImg }) {

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
    <div className='pageForm_fifteen'>
        <h2>Dados do imóvel de garantia</h2>
        <div className='pageForm_fifteen_row form_input'>
            <label htmlFor='registryName'>Cartório <span className='inpunt__required'>*</span></label>
            <input
                id="registryName"
                type="text"
                value={formData.registryName}
                onChange={(e) => setFormData({...formData, registryName: e.target.value})}
            />
        </div>
        <div className='pageForm_fifteen_row form_input'>
            <label htmlFor='registryRegistration'>Matrícula <span className='inpunt__required'>*</span></label>
            <input
                id="registryRegistration"
                type="text"
                value={formData.registryRegistration}
                onChange={(e) => setFormData({...formData, registryRegistration: e.target.value})}
            />
        </div>
        <div className='pageForm_fifteen_row form_input'>
            <label htmlFor='resgistryHouseType'>Tipo do Imóvel <span className='inpunt__required'>*</span></label>
            <select
                value={formData.resgistryHouseType}
                onChange={(e) => setFormData({...formData, resgistryHouseType: e.target.value})}
            >
                <option value="">Selecionar...</option>
                <option value="Comercial">Comercial</option>
                <option value="Residencial">Residencial</option>
            </select>
        </div>
        <div className='pageForm_fifteen_row form_input'>
            <label htmlFor='registryHousePaid'>O imóvel é quitado? <span className='inpunt__required'>*</span></label>
            <select
                value={formData.registryHousePaid}
                onChange={(e) => setFormData({...formData, registryHousePaid: e.target.value})}
            >
                <option value="">Selecionar...</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
            </select>
        </div>
        <div className='pageForm_fifteen_row form_input'>
            <label htmlFor='registrySellPrice'>Valor de Venda <span className='inpunt__required'>*</span></label>
            <input
                id="registrySellPrice"
                type="number"
                value={formData.registrySellPrice}
                onChange={(e) => setFormData({...formData, registrySellPrice: e.target.value})}
            />
        </div>
        <div className='pageForm_fifteen_row form_input'>
            <label htmlFor='registryHouseAddress'>Avenida / Rua <span className='inpunt__required'>*</span></label>
            <input
                id="registryHouseAddress"
                type="text"
                value={formData.registryHouseAddress}
                onChange={(e) => setFormData({...formData, registryHouseAddress: e.target.value})}
            />
        </div>
        <div className='pageForm_fifteen_row form_input'>
            <label htmlFor='registryHouseNumber'>Número <span className='inpunt__required'>*</span></label>
            <input
                id="registryHouseNumber"
                type="text"
                value={formData.registryHouseNumber}
                onChange={(e) => setFormData({...formData, registryHouseNumber: e.target.value})}
            />
        </div>
        <div className='pageForm_fifteen_row form_input'>
            <label htmlFor='registryHouseComp'>Complemento</label>
            <input
                id="registryHouseComp"
                type="text"
                value={formData.registryHouseComp}
                onChange={(e) => setFormData({...formData, registryHouseComp: e.target.value})}
            />
        </div>
        <div className='pageForm_fifteen_row form_input'>
            <label htmlFor='registryHouseNeighborhood'>Bairro <span className='inpunt__required'>*</span></label>
            <input
                id="registryHouseNeighborhood"
                type="text"
                value={formData.registryHouseNeighborhood}
                onChange={(e) => setFormData({...formData, registryHouseNeighborhood: e.target.value})}
            />
        </div>
        <div className='pageForm_fifteen_row form_input'>
            <label htmlFor='registryHouseCity'>Cidade <span className='inpunt__required'>*</span></label>
            <input
                id="registryHouseCity"
                type="text"
                value={formData.registryHouseCity}
                onChange={(e) => setFormData({...formData, registryHouseCity: e.target.value})}
            />
        </div>
        <div className='pageForm_fifteen_row form_input'>
            <label htmlFor='registryHouseState'>Estado <span className='inpunt__required'>*</span></label>
            <select
                name="registryHouseState"
                value={formData.registryHouseState}
                onChange={(e) => {setFormData({...formData, registryHouseState: e.target.value})}}
            >
            <option value="">Selecionar...</option>
                {BrazilStates.map((states, index) => {
                    return (
                    <option key={index} value={states.name}>{states.name}</option>
                    )
                })}
            </select>
        </div>
        <div className='pageForm_fifteen_row form_input_file'>
            <label htmlFor='registryCertifiedFile'>Certidão de Ônus com Inteiro Teor do Imóvel <span className='inpunt__required'>*</span></label>
            <input
                type="file"
                onChange={(e) => setOnusImg(e.target.files[0])}
                required
            />
            <img
              src={
                onusImg
                  ? URL.createObjectURL(onusImg)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
        </div>
    </div>
  )
}

export default PageFifteen