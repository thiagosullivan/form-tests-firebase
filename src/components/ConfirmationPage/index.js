import React from 'react';
import { Link } from 'react-router-dom';

function ConfirmationPage() {
  return (
    <div className='confirmation__page'>
        <h1>Os dados foram salvos!</h1>
        <Link to="/">Voltar para a Home</Link>
    </div>
  )
}

export default ConfirmationPage