import React from 'react'

function PageFourteen() {
  return (
    <div className='pageForm_fourteen'>
        <h2>Apenas confirmando.</h2>
        <div className='pageForm_fourteen_row'>
            <p>Você é fiador? <span className='inpunt__required'>*</span></p>
            <div>
                <input
                    type="radio"
                    value="Sim"
                />
                <label>
                    Sim
                </label>
            </div>
            <div>
                <input
                    type="radio"
                    value="Não"
                />
                <label>
                    Não
                </label>
            </div>
        </div>
    </div>
  )
}

export default PageFourteen