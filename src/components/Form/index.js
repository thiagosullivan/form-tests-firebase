import React, { useState } from 'react';
// Firebase
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
// Icons
import {GrFormPrevious, GrFormNext} from 'react-icons/gr';
import {FiSend} from 'react-icons/fi';
// Hook
import { useForm } from '../../hooks/useForm';
// Pages Form
import PageOne from '../../components/Form/FormPages/PageOne';
import PageTwo from '../../components/Form/FormPages/PageTwo';
import PageThree from '../../components/Form/FormPages/PageThree';
import PageFour from '../../components/Form/FormPages/PageFour';
import PageFive from '../../components/Form/FormPages/PageFive';
import PageSix from '../../components/Form/FormPages/PageSix';
import PageSeven from '../../components/Form/FormPages/PageSeven';
import PageEight from '../../components/Form/FormPages/PageEight';
import PageNine from '../../components/Form/FormPages/PageNine';
import PageTen from '../../components/Form/FormPages/PageTen';
import PageEleven from '../../components/Form/FormPages/PageEleven';
import PageTwelve from '../../components/Form/FormPages/PageTwelve';
import PageThirteen from '../../components/Form/FormPages/PageThirteen';
import PageFourteen from '../../components/Form/FormPages/PageFourteen';
import PageFifteen from '../../components/Form/FormPages/PageFifteen';

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
        <PageFour formData={formData} setFormData={setFormData}/>,
        <PageFive formData={formData} setFormData={setFormData}/>,
        <PageSix formData={formData} setFormData={setFormData}/>,
        <PageSeven formData={formData} setFormData={setFormData}/>,
        <PageEight formData={formData} setFormData={setFormData}/>,
        <PageNine formData={formData} setFormData={setFormData}/>,
        <PageTen formData={formData} setFormData={setFormData}/>,
        <PageEleven formData={formData} setFormData={setFormData}/>,
        <PageTwelve formData={formData} setFormData={setFormData}/>,
        <PageThirteen formData={formData} setFormData={setFormData}/>,
        <PageFourteen formData={formData} setFormData={setFormData}/>,
        <PageFifteen formData={formData} setFormData={setFormData}/>,
    ]

    console.log(formData)

    const {
        currentStep,
        currentComponent,
        changeStep,
        isLastStep,
        isFirstStep
    } = useForm(formComponents)

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            await setDoc(doc(db, "locatarios", formData.userEmail), {
            ...formData,
            timeStamp: serverTimestamp()
            });
            console.log("ENVIADO!")
        } catch (error) {
            console.log(error.message)
        }
    }
    
    
    return (
        <div>
            <p>Etapas</p>
            <form onSubmit={handleFormSubmit}>
                <div className='input_container'>
                    {currentComponent}
                </div>
                <div className='actions'>
                    {!isFirstStep && (
                        <button type='button' onClick={() => changeStep(currentStep - 1)}>
                            <GrFormPrevious />
                            <span>Voltar</span>
                        </button>
                    )}
                    {!isLastStep ? (
                        <button type='button' onClick={(e) => changeStep(currentStep + 1, e)}>
                            <GrFormNext />
                            <span>Avançar</span>
                        </button>
                    ) : (
                        <button type='submit'>
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