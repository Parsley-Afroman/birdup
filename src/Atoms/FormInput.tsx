import { ReactElement, useEffect, useState } from "react"

interface formInput {
    type: string, 
    name: string, 
    label: string,
    label2?: string,
    value?: string | number,
    value2?: string | number, 
    min?: number, 
    max?: number,
    setFormData?: any, 
    formData?: object,
    placeholder?: string,
}


function FormInput ({type, name, label, label2, value, value2, min, max, setFormData, formData, placeholder} : formInput) : ReactElement<HTMLElement> {
    

    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
            setFormData((prevState: any) => ({
                ...prevState, 
                [e.target.name]: e.target.value,
                
            }))
            console.log(formData)
        }
    let rangeType : boolean
    type == 'range' ? rangeType = true : rangeType = false

    return (
        <div className="formInput">
                {!rangeType && <label>{label}</label>}
            <div className={rangeType ? 'rangeInput' : 'regInput'}>
                {rangeType && <><label>{label}</label></>}
                <input id={rangeType ? 'range' : ''} className={rangeType ? 'range' : 'reg'} type={type} name={name} value={value} min={min} max={max} placeholder={placeholder} onChange={onChange}></input>
                {value2 && <input type={type} name={name} value={value2} min={min} max={max} onChange={onChange}></input>}
                {label2 && <><label>{label2}</label></>}
            </div>
       
        </div>
    )
}

export default FormInput