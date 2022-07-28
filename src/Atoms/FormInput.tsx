import { ReactElement, useEffect, useState } from "react";

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
    placeholder?: string,
}

/*
    Function enables a form input to be dynamically generated in accordance with its type (e.g. radio requires two values at least and a range requires a min and max)
        - type: determines the type of the input (e.g. text, number, submit, etc)
        - name: determines the name of the input so that its value can be selected on submission
        - label: provides the input with a label so that the user knows what it is for (aria labels should also be used on the input for accessibility)
        - label2: (optional props) is used when the type requires it and provides the input with a label for its second value
        - value: providing this option enables the input value to be updated as the user inputs the requirements 
            (for, e.g. radio inputs, it statically sets the value of the input )
        - value2: (optional props) "" (used primarily for radio inputs)
        - min: (optional props) sets the minimum value for the range input and limits what can be input into e.g. a number input like age where you cannot be 0 or less.
        - max: (optional props) "(vice versa)"
        - setFormData: (optional props) this useState functionality enables the values to be extracted from the inputs, which is then used to update the value of the 
            input on a JSON list.
        - placeholder: (optional props) added for a humourous touch but can be used to relay necessary info about the input.
        **OPTIONAL PROPS NEED REVIEWING AS MAY NOT REQUIRE OPTIONALITY**
*/

function FormInput ({type, name, label, label2, value, value2, min, max, setFormData, placeholder} : formInput) : ReactElement<HTMLElement> 
{
    /* 
        This enables the range to have a dynamic label that informs the user of what attribute they're preferencing
        it also ensures that the range works bi-directional with the central value being 0 and both opposites are a value of 10 for the opposing attribute 
    */
    const [abilityValue, setAbiltyValue] = useState(0);
    const strValue = 10 - abilityValue;
    const intValue = abilityValue; 

    /*
        Function is assigned to a variable so that it can be called within the return statement (as you generally aren't able to run functions in it).
        It is assigned to the element's onChange parameter so that it can action itself upon amendment to the target element.
    */
    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => 
    {
            /* 
                Ensures that the cells can be left blank; however, there is another check to ensure that the entries have changed
                before the form is submitted
            */
            const emptyOnly = /^(?![\s\S])/;
             /* 
                Ensures that words can have a space between them, however, it is allowing more than a single space after words
            */
            const spaceBetweenWords = /(?:[a-z]|[0-9])+[\s{1}]?/ig
            /*
                Ensures the inputs don't have special characters except for hypens and underscores, however, it is allowing more
                than a single hypen after words
            */ 
            const nonAlphaNumeric = /[^\w\d\s\-:]/

            const value = e.target.value
            const name = e.target.name
            /* 
                Added some validation before processing the form (the BE should have the proper validation & sanitisation as the FE
                can be amended by the user) 
            */
            if(emptyOnly.test(value) || spaceBetweenWords.test(value) && !nonAlphaNumeric.test(value))
            {
                    // as abilities has a single target but with two values it has to have its values extracted differently to other inputs. 
                if(name == 'abilities')
                {
                    // Sets the value of both strength and intelligence by passing through the above useState functionality
                    setAbiltyValue(parseInt(value));
                    
                    setFormData((prevState : any) => 
                    ({
                        // The spread operator on prevState is a built-in ability of useState to capture the existing state of its contents and append only the amendments
                        ...prevState,
                        // utilises the seperated values of the single input an applies them to the JSON list (these are the amendments)
                        ['strength']: strValue,
                        ['intelligence']: intValue,
                    }));
                }
                // This is the else to the above if and genrically does the same as the above for the remaining JSON list values
                setFormData((prevState: any) => 
                ({
                    ...prevState,
                    [name]: value,
                }));
            }
            
        }

    // type will always have a value so would always be a truthy; therefore, this assesses the type and creates the ability to conditionally render the return (&&). 
    const rangeType = type == 'range' ?  true :  false;

    return (
        <div className="formInput">
            {/* Conditional rendering label based on it not being a range type input*/}
            {!rangeType && 
                <label>{label}</label>
            }
            {/* Dynamically settiing the the className based on the input type */}
                <div className={rangeType ? 'rangeInput' : value2 ? 'radioInput' : 'regInput'}>
            {/* Conditional rendering for the first range label - representing the strength */}
            {rangeType && 
                    <label>{`${label} -> ${strValue}`}</label>
            }
            {/* As radio buttons need styling to appear as part of the same input this div acts as a wrapper (functionality could be created so that the return 
                only includes what is required; instead of having empty classNames)*/}
                <div className={value2 ? 'radioValue' : ''}>
            {/* Conditionally setting the the label based on the existence of a second value */}
                    {value2 && 
                        <label>Yes</label>
                    }
            {/* This div enables the styling you see around the input (this can also be used to indicate issue with the input values by amending its colour) */}
                        <div className="inputOuterRim">
            {/* Dynamically setting the className based on the input type reg = anything but range or radio */}
                            <input id={rangeType ? 'range' : ''} className={rangeType ? 'range' : value2 ? 'radio' : 'reg'} type={type} name={name} value={value} min={min} max={max} placeholder={placeholder} onChange={onChange}></input>
                        </div>
                </div>
            {/* Conditionally render the remainder of the form based on whether it contains a radio input type (determined by the presence of a second value) */}
                {value2  && 
                        <div className="radioValue">
                            <label>No</label>
                                <div className="inputOuterRim">
                                    <input className='radio' type={type} name={name} value={value2} min={min} max={max} onChange={onChange}></input>
                                </div>
                        </div>
                }
            {/* Conditional rendering for the second range label - representing the intelligence */}
                    {label2 && 
                            <label>{`${intValue} <- ${label2}`}</label>
                    }
                </div>
        </div>
    )
}

export default FormInput;