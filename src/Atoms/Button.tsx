import { ButtonHTMLAttributes, ReactElement } from "react";

function Button ({action} : any) : ReactElement<ButtonHTMLAttributes<string>> 
{
    return <button type="button">{action.length <= 5 && typeof  action === 'string' ? action : 'nope'}</button>;
}

export default Button;