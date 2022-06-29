import { ButtonHTMLAttributes, ReactElement } from "react";

interface buttonProps {
    action : string
}

function Button ({action} : buttonProps) : ReactElement<ButtonHTMLAttributes<string>> 
{
    return <button type="button">{action.length <= 5 && typeof  action === 'string' ? action : 'nope'}</button>;
}

export default Button;