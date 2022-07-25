import { useEffect, useState } from "react";
import ActionButton from "../Atoms/ActionButton";
import CardHeader from "../Atoms/CardHeader";
import FormInput from "../Atoms/FormInput";
import ApiService from "../Services/ApiService";

interface formProps{
    formName: string,
    formType?: string,
    id?: string,
    setAddModal: Function,
}

function AddForm({formName, formType, id, setAddModal} : formProps){

    // enables the form to be populated on upload & reset on exit
    const defaultFormData = {
                name: '',
                origin: '',
                diet: '',
                age: 1,
                real: 0,
                strength: 5, 
                intelligence: 5,
                image: '',
                
            }

    // The getter and setter for the formData
    const [formData, setFormData] = useState(defaultFormData)

    // checks that the form has been changed and applies a boolean
    const formChanged = formData.name !== defaultFormData.name &&
                        formData.origin !== defaultFormData.origin &&
                        formData.diet !== defaultFormData.diet &&
                        formData.age >= defaultFormData.age &&
                        formData.real >= defaultFormData.real ? true : false

    // Submit action for the addForm
    const onSubmit = (e : any) => {
        e.stopPropagation()
        if(e.target.className === 'addBtn' && formChanged){
            // sends the formData to the API Post method
            ApiService.PostApiService.CreateSingleBird(formData)
            //  resets the form
            setFormData(defaultFormData)
            // hides the modal
            setAddModal('hide')
        } else
            {
                // resets the form and closes the modal
                setFormData(defaultFormData)
                setAddModal('hide')
            }
    }

    return (
        <div id={id} className={formType}>
            <iframe name="maintainFrame" id="maintainFrame"></iframe>
            <form id={formName} method='post' target="maintainFrame">
                <FormInput type={'text'} name={'name'} formData={formData} setFormData={setFormData} label={'What is my name?'} value={formData.name} placeholder={'Call me...'}/>
                <FormInput type={'text'} name={'origin'} formData={formData} setFormData={setFormData} label={'Where am I from?'} value={formData.origin} placeholder={'I hail from...'}/>
                <FormInput type={'text'} name={'diet'} formData={formData} setFormData={setFormData} label={'What do I love to eat?'} value={formData.diet} placeholder={'... is delicious!'}/>
                <FormInput type={'number'} name={'age'} formData={formData} setFormData={setFormData} label={'How old am I?'} min={1} max={999} value={formData.age} placeholder={'... years young!'}/>
                <FormInput type={'radio'} name={'real'} formData={formData} setFormData={setFormData} label={'Did you make me up?'} value={0} value2={1}/>
                <FormInput type={'range'} name={'abilities'} formData={formData} setFormData={setFormData} label={'Strength'} label2={'Intelligence'} min={0} max={10}/>
                <FormInput type={'text'} name={'image'} formData={formData} setFormData={setFormData} label={'Upload my image:'} placeholder={'I look rather dashing!'}/>
            </form>
            <div className="buttons">
                    <ActionButton btnType={'submit'} onClick={onSubmit} btnForm={formName} name={'addBtn'} action={'add'}/>
                    <ActionButton btnType={'submit'} onClick={onSubmit} btnForm={formName} name={'exitBtn'} action={'exit'}/>
            </div>
        </div>
    )
}

export default AddForm;