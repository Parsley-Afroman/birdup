import { ButtonHTMLAttributes, FormEventHandler, ReactElement } from "react";

interface actionProps {
    action: string,
    btnType?: "button" | "submit" | "reset" | undefined,
    name?: string,
    btnForm?: string,
    onClick?: FormEventHandler<HTMLButtonElement>,
}

/* 
Function enables you to create a button with a particlar functionaliy:
    - action: What it will do (e.g. 'add', 'exit', etc.)
    - btnType: What action the button will do (e.g. 'submit')
    - name: The class name
    - btnForm: What form the button is associated with (e.g. 'addForm')
*/
function ActionButton ({action, btnType, name, btnForm, onClick} : actionProps) : ReactElement<ButtonHTMLAttributes<string>> 
{   
    //form is either associated or left blank as it requires an input (this could potentially be dynamically set within a function that is called in the return)
    //type is either associated or left blank as it requires an input (this could potentially be dynamically set within a function that is called in the return)
    /*onClick is either associated or given a aimless function (e.g. console.log) as it requires an input 
    (this could potentially be dynamically set within a function that is called in the return)*/
    // The button label is determined by the action, the length of the label is limited to 5 characters and as a type of 'string'
    return <button className={name} form={btnForm ? btnForm : ""} type={btnType ? btnType : "button"} onClick={onClick ? onClick : ()=>{console.log('empty')}}>{action.length <= 5 && typeof action === 'string' ? action : 'nope'}</button>;
}

export default ActionButton;