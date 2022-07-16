import { ReactElement } from "react"

interface formInput {
    type: string; 
    name: string; 
    value?: string | number; 
    value2?: string | number; 
    min?: number; 
    max?: number; 
    setFormData?: any; 
    formData?: object;
}


function FormInput ({type, name, value, value2, min, max, setFormData, formData} : formInput) : ReactElement<HTMLElement> {
    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
            setFormData((prevState: any) => ({
                ...prevState, 
                [e.target.name]: e.target.value,
                
            }))
            console.log(formData)
        }
    return (
        <div className="formInput">
        <label>{name}</label>
            <div className="formInputEntry">
                <input type={type} name={name} value={value} min={min} max={max} onChange={onChange}></input>
                {value2 && <input type={type} name={name} value={value2} min={min} max={max} onChange={onChange}></input>}
            </div>
        </div>
    )
}

export default FormInput