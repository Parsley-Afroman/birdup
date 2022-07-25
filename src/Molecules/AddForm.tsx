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
    // onSubmit, pass form data throught to the ApiService.PostService
    // submit needs to differentiate between the target of add and exit. e.target.name
    // useState for all form entries so that they can be passed into the POST service

    const defaultFormData = {
                name: '',
                origin: '',
                diet: '',
                age: 1,
                real: 0,
                strength: 0, 
                intelligence: 0,
                image: '',
                
            }

    const [formData, setFormData] = useState(defaultFormData)
    useEffect(()=>{console.log(formData)},[formData])

    const onSubmit = (e : any) => {
        e.stopPropagation()
        if(e.target.className === 'addBtn'){
            console.log('add')
            ApiService.PostApiService.CreateSingleBird(formData)
            setFormData(defaultFormData)
            setAddModal('hide')
        } else
            {
                console.log('exit') 
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