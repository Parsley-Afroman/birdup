import { ButtonHTMLAttributes, ReactElement } from "react";

interface actionProps {
    action: string,
    name?: string,
}

function ActionButton ({action, name} : actionProps) : ReactElement<ButtonHTMLAttributes<string>> 
{   
    return <button className={name} type="button">{action.length <= 5 && typeof action === 'string' ? action : 'nope'}</button>;
}

export default ActionButton;