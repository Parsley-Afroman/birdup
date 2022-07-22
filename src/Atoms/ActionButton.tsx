import { ButtonHTMLAttributes, ReactElement } from "react";

interface actionProps {
    action: string,
    btnType?: "button" | "submit" | "reset" | undefined,
    name?: string,
    btnForm?: string,
}

function ActionButton ({action, btnType, name, btnForm} : actionProps) : ReactElement<ButtonHTMLAttributes<string>> 
{   
    return <button className={name} form={btnForm ? btnForm : ""} type={btnType ? btnType : "button"}>{action.length <= 5 && typeof action === 'string' ? action : 'nope'}</button>;
}

export default ActionButton;