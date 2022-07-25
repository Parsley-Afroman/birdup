import { ButtonHTMLAttributes, FormEventHandler, ReactElement } from "react";

interface actionProps {
    action: string,
    btnType?: "button" | "submit" | "reset" | undefined,
    name?: string,
    btnForm?: string,
    onClick?: FormEventHandler<HTMLButtonElement>,
}

function ActionButton ({action, btnType, name, btnForm, onClick} : actionProps) : ReactElement<ButtonHTMLAttributes<string>> 
{   
    return <button className={name} form={btnForm ? btnForm : ""} type={btnType ? btnType : "button"} onClick={onClick ? onClick : ()=>{console.log('empty')}}>{action.length <= 5 && typeof action === 'string' ? action : 'nope'}</button>;
}

export default ActionButton;