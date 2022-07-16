import CardHeader from "../Atoms/CardHeader";
import FormInput from "../Atoms/FormInput";

function AddForm(){
    // onSubmit, pass form data throught to the ApiService.PostService
    return (
        <>
            <iframe name="maintainFrame" id="maintainFrame"></iframe>
            <form method='post' onSubmit={()=>{}} target="maintainFrame">
                <FormInput type={'radio'} name={'radio'} value={'yes'} value2={'no'}/>
            </form>
        </>
    )
}

export default AddForm;