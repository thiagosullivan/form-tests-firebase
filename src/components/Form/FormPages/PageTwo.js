import React, { useState } from 'react';

function PageTwo({ formData, setFormData, setSelfieImg, selfieImg }) {

  return (
    <div className='pageTwo_form form_input_file'>
      <h2>Envie sua Selfie!</h2>
      <p className='littleInfos'>Essa validação é obrigatória. Caso você não consiga anexar uma selfie, informe seu corretor pois o não envio dessa informação pode acarretar em <strong>reprovação automática</strong>.</p>
      <input
        type="file"
        onChange={(e) => setSelfieImg(e.target.files[0])}
        required
      />

      <div>
            <img
              src={
                selfieImg
                  ? URL.createObjectURL(selfieImg)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
      </div>
    </div>
  )
}

export default PageTwo