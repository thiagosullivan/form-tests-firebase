import React, { useEffect, useState } from 'react';
import { db } from "../../firebase";
import { collection, query, where, getDocs, orderBy, onSnapshot } from "firebase/firestore";

function ListPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const colRef = collection(db, "locatarios")
    
    const q = query(colRef, orderBy('userEmail'));
    
    const users = onSnapshot(q, (snapshot) => {
      let locats = []
      snapshot.docs.forEach((doc) => {
        locats.push({...doc.data()})
      })
      console.log(locats)
      setData(locats)
    });

    return () => {
      users();
    }

  }, [])

  console.log(data, 'DATA')

  return (
    <div className='list__page'>
        <h1>Listas</h1>
        <div className='list__data'>
          {data.map((locat, index) => {
            return (
              <div className='list__card' key={index}>
                <div className='list_col1'>
                  <h3>Dados Pessoais</h3>
                  <div>
                    <p><strong>Nome:</strong> {locat.userName}</p>
                    <p><strong>CPF:</strong> {locat.userCPF}</p>
                    <p><strong>RG:</strong> {locat.userRG}</p>
                    <p><strong>Telefone:</strong> {locat.userPhone}</p>
                    <p><strong>E-mail:</strong> {locat.userEmail}</p>
                    <p><strong>Nascimento:</strong> {locat.userBirth}</p>
                    <p><strong>Nome da mãe:</strong> {locat.mothersName}</p>
                    <p><strong>Nome da pai:</strong> {locat.fathersName}</p>
                    <p><strong>Estado civil:</strong> {locat.maritalStatus}</p>
                    <div className='list__selfie'>
                      <p><strong>Selfie:</strong></p>
                      <img src={locat.selfieUrl ? locat.selfieUrl : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt={locat.userName}/>
                    </div>
                  </div>
                </div>
                <div className='list_col2'>
                  <h3>Dados Cadastrais</h3>
                  <div>
                    <p><strong>Rua:</strong> {locat.addressStreet}</p>
                    <p><strong>Número:</strong> {locat.addressNumber}</p>
                    <p><strong>Complemento:</strong> {locat.addressComp}</p>
                    <p><strong>Bairro:</strong> {locat.neighborhood}</p>
                    <p><strong>CEP:</strong> {locat.CEP}</p>
                    <p><strong>Cidade:</strong> {locat.addressCity}</p>
                    <p><strong>Estado:</strong> {locat.addressState}</p>
                    <p><strong>Tempo neste endereço:</strong> {locat.addressTime}</p>
                    <p><strong>Tipo de imóvel:</strong> {locat.ownRent}</p>
                    <p><strong>Tipo de locação:</strong> {locat.rentType}</p>
                  </div>
                </div>
                <div className='list_col3'>
                  <h3>Dados de Trabalho</h3>
                  <div>
                    <p><strong>Nome da empresa:</strong> {locat.rentCompany}</p>
                    <p><strong>Tempo de registro:</strong> {locat.jobTime}</p>
                    <p><strong>Cargo:</strong> {locat.jobRole}</p>
                    <p><strong>Endereço da empresa:</strong> {locat.companyAddress}</p>
                    <p><strong>Telefone da empresa:</strong> {locat.companyPhone}</p>
                    <p><strong>Renda comprovada:</strong> R$ {locat.provenRent}</p>
                    <p><strong>Renda extra:</strong> R$ {locat.extraRent ? locat.extraRent : ''}</p>
                  </div>
                </div>
                <div className='list_col4'>
                  <h3>Dados do Processo</h3>
                  <div>
                    <p><strong>Código do corretor:</strong> {locat.agentCode}</p>
                    <p><strong>Nome do corretor:</strong> {locat.agentName}</p>
                    <p><strong>Tipo de cadastro:</strong> {locat.typeForm}</p>
                    <p><strong>Imóvel:</strong> {locat.houseType}</p>
                    <p><strong>Tipo de pessoa:</strong> {locat.personType}</p>
                    <p><strong>Nome da imobiliária:</strong> {locat.rentName}</p>
                    <p><strong>Telefone da imobiliária:</strong> {locat.rentPhone}</p>
                  </div>
                </div>
                <div className='list_col5'>
                  <h3>Documentos Anexados</h3>
                  <div className='list_col5_content'>
                    <div>
                      <p><strong>CPF / CNH</strong></p>
                      <img src={locat.cnhImg ? locat.cnhImg : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="CNH/CPF" />
                    </div>
                    <div>
                      <p><strong>RG</strong></p>
                      <img src={locat.rgImg ? locat.rgImg : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="RG" />
                    </div>
                    <div>
                      <p><strong>Comprovante de Residência Atual</strong></p>
                      <img src={locat.currentLocalImg ? locat.currentLocalImg : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="Comprovante de Residência Atual" />
                    </div>
                    <div>
                      <p><strong>Certidão de Nascimento / Casamento</strong></p>
                      <img src={locat.marryBornImg ? locat.marryBornImg : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="Certidão de Nascimento / Casamento" />
                    </div>
                    <div>
                      <p><strong>Certidão Cível / Criminal</strong></p>
                      <img src={locat.crimeImg ? locat.crimeImg : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="Certidão Cível / Criminal" />
                    </div>

                  </div>
                </div>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default ListPage