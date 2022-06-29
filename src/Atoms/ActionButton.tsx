import { ButtonHTMLAttributes, ReactElement } from "react";

function ActionButton ({action} : any) : ReactElement<ButtonHTMLAttributes<string>> 
{
    return <button type="button">{action.length <= 5 && typeof action === 'string' ? action : 'nope'}</button>;
}

export default ActionButton;