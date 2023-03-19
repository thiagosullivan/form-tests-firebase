import React from 'react'

function PageThree({  formData, setFormData }) {

  const Agents = [
    {agentName: 'Cleide Adamo'},
    {agentName: 'Denise'},
    {agentName: 'Ivan'},
    {agentName: 'Josi'},
    {agentName: 'Luciane'},
    {agentName: 'Silvia'},
    {agentName: 'Patrik'},
    {agentName: 'Patrícia'},
    {agentName: 'Zilda'},
    {agentName: 'Jorge'},
    {agentName: 'Jamile'},
    {agentName: 'MQL'},
    {agentName: 'Alteração Cadastral'},
  ]
  return (
    <div className='pageThree_form'>
      <h2>Informações do processo</h2>
      <div className='pageThree_form_row'>
        <p>Informe o código passado pelo seu corretor para iniciar seu processo. <span className='inpunt__required'>*</span></p>
        <div className='form_input'>
          <input
            type="text"
            required
            value={formData.agentCode}
            onChange={(e) => setFormData({...formData, agentCode: e.target.value})}
          />
          <label className='littleInfos'>O código deve ser nesse formato: <span className='uppercase'>CA0123</span> ou <span className='uppercase'>AP01234</span>  - <span className='uppercase'>APENAS MAIÚSCULAS</span></label>
        </div>
      </div>
      <div className='pageThree_form_row form_input'>
        <p>Qual é o nome do corretor que o atendeu. <span className='inpunt__required'>*</span></p>
        <select name="agents" value={formData.agentName} onChange={(e) => setFormData({...formData, agentName: e.target.value})} required>
          <option value="">Selecionar...</option>
        {Agents.map((agent, index) => {
          return (
              <option key={index} value={agent.agentName}>
                {agent.agentName}
              </option>
              )
          })}
        </select>
      </div>
      <div className='pageThree_form_row form_input'>
        <p>Qual o tipo da sua locação? <span className='inpunt__required'>*</span></p>
        <select name="rentType" value={formData.rentType} onChange={(e) => setFormData({...formData, rentType: e.target.value})} required>
          <option value="">Selecionar...</option>
          <option value="Residencial">Residencial</option>
          <option value="Comercial">Comercial</option>
          
        </select>
      </div>
      {/* <input
        type="text"
        placeholder='telefone'
        value={formData.phone}
        onChange={(e) => setFormData({...formData, phone: e.target.value})}
      /> */}
    </div>
  )
}

export default PageThree