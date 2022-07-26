import { ButtonHTMLAttributes, ReactElement } from "react";

interface buttonProps {
    action : string,
    form?: string,
    value?: string
}

function Button ({action, form, value} : buttonProps) : ReactElement<ButtonHTMLAttributes<string>> 
{
    // The button label is determined by the action, the length of the label is limited to 5 characters and as a type of 'string'
    return <button type="button" form={form} value={value}>{action.length <= 5 && typeof  action === 'string' ? action : 'nope'}</button>;
}

export default Button;