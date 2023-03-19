import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Firebase
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { uuidv4 } from '@firebase/util';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
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
    const [loading, setLoading] = useState(false)
    const [selfieImg, setSelfieImg] = useState(null)
    const [onusImg, setOnusImg] = useState(null)
    const navigate = useNavigate();

    console.log()
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
        personalRefTwoPhone: ""
         
      })
    const formComponents = [
        <PageOne formData={formData} setFormData={setFormData} />,
        <PageTwo formData={formData} setFormData={setFormData} selfieImg={selfieImg} setSelfieImg={setSelfieImg} />,
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
        <PageFifteen formData={formData} setFormData={setFormData} onusImg={onusImg} setOnusImg={setOnusImg} />,
    ]

    console.log(formData)

    const {
        currentStep,
        currentComponent,
        changeStep,
        isLastStep,
        isFirstStep
    } = useForm(formComponents)

    useEffect(() => {
        const uploadSelfie = () => {
            if (selfieImg == null) return;
            const selfieRef = ref(storage, `img/selfies/${ uuidv4()}`)
            const uploadSelfie = uploadBytesResumable(selfieRef, selfieImg)

            uploadSelfie.on('state_changed', 
                () => {
                    getDownloadURL(uploadSelfie.snapshot.ref).then((downloadURL) => {
                        setFormData((prev)=>({...prev, selfieUrl:downloadURL}))
                    });
                }
            );
        }
        selfieImg && uploadSelfie()
    },[selfieImg])
    
    useEffect(() => {
        const uploadOnus = () => {
            if (onusImg == null) return;
            const onusRef = ref(storage, `img/onus/${ uuidv4()}`)
            const uploadOnus = uploadBytesResumable(onusRef, onusImg)

            uploadOnus.on('state_changed', 
                () => {
                    getDownloadURL(uploadOnus.snapshot.ref).then((downloadURL) => {
                        setFormData((prev)=>({...prev, onusImgUrl:downloadURL}))
                    });
                }
            );
        }
        onusImg && uploadOnus()
    }, [onusImg])
    

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            await setDoc(doc(db, "locatarios", formData.userEmail), {
                ...formData,
                timeStamp: serverTimestamp(),
                id:formData.userEmail
            });
            setLoading(false)
            console.log("ENVIADO!")
            navigate("/confirmacao")
        } catch (error) {
            console.log(error.message)
        }
    }
    
    
    return (
        <div>
            <div className='navigation_links'>
                <Link to="/lista">Ir para a lista</Link>
            </div>
            <h1>Formulário</h1>         
            <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
                <div className='input_container'>
                    {currentComponent}
                </div>
                {loading && (
                    <div>
                        Carregando...
                    </div>
                )}
                <div className='actions'>
                    {!isFirstStep && (
                        <button type='button' onClick={() => changeStep(currentStep - 1)}>
                            <GrFormPrevious />
                            <span>Voltar</span>
                        </button>
                    )}
                    {!isLastStep ? (
                        <button type='submit'>
                            <span>Avançar</span>
                            <GrFormNext />
                        </button>
                    ) : (
                        <button type='button' onClick={handleFormSubmit}>
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