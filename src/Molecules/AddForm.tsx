import ActionButton from "../Atoms/ActionButton";
import CardHeader from "../Atoms/CardHeader";
import FormInput from "../Atoms/FormInput";

interface formProps{
    formName: string,
    id?: string,
}

function AddForm({formName, id} : formProps){
    // onSubmit, pass form data throught to the ApiService.PostService
    return (
        <div id={id}>
            <iframe name="maintainFrame" id="maintainFrame"></iframe>
            <form id={formName} method='post' onSubmit={()=>{}} target="maintainFrame">
                <FormInput type={'text'} name={'name'} label={'What is my name?'} placeholder={'Call me...'}/>
                <FormInput type={'text'} name={'origin'} label={'Where am I from?'} placeholder={'I hail from...'}/>
                <FormInput type={'text'} name={'diet'} label={'What do I love to eat?'} placeholder={'... is delicious!'}/>
                <FormInput type={'number'} name={'age'} label={'How old am I?'} min={1} max={999} placeholder={'... years young!'}/>
                <FormInput type={'radio'} name={'real'} label={'Did you make me up?'} value={'yes'} value2={'no'}/>
                <FormInput type={'range'} name={'abilities'} label={'Strength'} label2={'Intelligence'} min={0} max={10}/>
                <FormInput type={'text'} name={'image'} label={'Upload my image:'} placeholder={'I look rather dashing!'}/>
                <div className="buttons">
                    <ActionButton name={'addBtn'} action={'add'}/>
                    <ActionButton name={'exitBtn'} action={'exit'}/>
                </div>
            </form>
        </div>
    )
}

export default AddForm;