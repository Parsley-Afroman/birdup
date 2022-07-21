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
    const [abilityValue, setAbiltyValue] = useState(0)

    // need a sum so that when ability value = 10 the intValue = 10 and strValue = 0, and vice versa for when ability value = 0

    let strValue = 10 - abilityValue 
    let intValue = abilityValue 

    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
            if(e.target.name == 'abilities'){
                setAbiltyValue(parseInt(e.target.value))
                console.log(abilityValue)
            }

            // setFormData((prevState: any) => ({
            //     ...prevState, 
            //     [e.target.name]: e.target.value,
            // }))
            // console.log(formData)
        }
    let rangeType : boolean
    type == 'range' ? rangeType = true : rangeType = false

    return (
        <div className="formInput">
                {!rangeType && <label>{label}</label>}
            <div className={rangeType ? 'rangeInput' : value2 ? 'radioInput' : 'regInput'}>
                {rangeType && <><label>{`${label} -> ${strValue}`}</label></>}
                <div className={value2 ? 'radioValue' : ''}>
                    {value2  && <label>Yes</label>}
                    <div className="inputOuterRim">
                            <input id={rangeType ? 'range' : ''} className={rangeType ? 'range' : value2 ? 'radio' : 'reg'} type={type} name={name} value={value} min={min} max={max} placeholder={placeholder} onChange={onChange}></input>
                    </div>
                </div>
            
                {value2  && <>
                <div className="radioValue">
                    <label>No</label>
                        <div className="inputOuterRim">
                            <input className='radio' type={type} name={name} value={value2} min={min} max={max} onChange={onChange}></input>
                        </div>
                </div>
                    </>}
                {label2 && <><label>{`${intValue} <- ${label2}`}</label></>}
               
            </div>
        </div>
    )
}

export default FormInput