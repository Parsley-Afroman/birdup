import { ButtonHTMLAttributes, ReactElement } from "react";

interface actionProps {
    action: string;
}

function ActionButton ({action} : actionProps) : ReactElement<ButtonHTMLAttributes<string>> 
{   
    return <button type="button">{action.length <= 5 && typeof action === 'string' ? action : 'nope'}</button>;
}

export default ActionButton;