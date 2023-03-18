import React, { useState } from 'react';
import {GrFormPrevious, GrFormNext} from 'react-icons/gr';
import {FiSend} from 'react-icons/fi';
// Hook
import { useForm } from '../../hooks/useForm';
import PageOne from '../../components/Form/FormPages/PageOne';
import PageTwo from '../../components/Form/FormPages/PageTwo';
import PageThree from '../../components/Form/FormPages/PageThree';
import UserForm from '../../components/Form/FormPages/PageOne';
import Steps from './Steps';

function Form() {
    const [formData, setFormData] = useState({
        typeForm:"",
        agentCode: "",
        agentName: "",
        rentType: "",
        houseType: "",
        personType: "",
        userName: "",
        userCPF: "",  
        userRG: "",
        userBirth: "",
        mothersName: "",
        fathersName: "",
        userEmail: "",
        userPhone: "",
        CEP: "",
        addressStreet: "",
        addressNumber: "",
        addressComp: "",
        neighborhood: "",
        addressCity: "",
        addressState: "",
        addressTime: "",
        ownRent: "",
        rentName: "",
        rentForm: "",
        rentCompany: "",
        jobTime: "",
        jobRole: "",
        companyAddress: "",
        companyPhone: "",
        provenRent: "",
        extraRent: "",
        maritalStatus: "",
        personalRefOneName: "",
        personalRefOnePhone: "",
        personalRefTwoName: "",
        personalRefTwoPhone: "",
      })
    const formComponents = [
        <PageOne formData={formData} setFormData={setFormData} />,
        <PageTwo formData={formData} setFormData={setFormData} />,
        <PageThree formData={formData} setFormData={setFormData}/>,
        <p>Página 4</p>
    ]

    const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = useForm(formComponents)
    
    
    return (
        <div>
            <p>Etapas</p>
            <Steps currentStep={currentStep} />
            <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
                <div className='input_container'>
                    {currentComponent}
                </div>
                <div className='actions'>
                    {/* <button disabled={isFirstStep} type='button' onClick={() => changeStep(currentStep - 1)}>
                        <GrFormPrevious />
                        <span>Voltar</span>
                    </button> */}
                    {!isFirstStep && (
                        <button type='button' onClick={() => changeStep(currentStep - 1)}>
                            <GrFormPrevious />
                            <span>Voltar</span>
                        </button>
                    )}
                    {!isLastStep ? (
                        <button type='submit'>
                            <GrFormNext />
                            <span>Avançar</span>
                        </button>
                    ) : (
                        <button type='button'>
                            <FiSend />
                            <span>Enviar</span>
                        </button>
                    )}
                    
                </div>
            </form>
        </div>
    )
}

export default Form