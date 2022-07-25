import NavButton from "../Atoms/NavButton";
import ActionButton from "../Atoms/ActionButton";
import { FormEventHandler } from "react";

interface pageNavProps {
    leftDirection: string;
    rightDirection: string;
    action: string;
    setAddModal: Function;
}

function PageNav ({leftDirection, rightDirection, action, setAddModal} : pageNavProps) 
{
    const onClick : FormEventHandler<HTMLButtonElement> = () => {
        setAddModal('')
    }
    return (
        <nav>
            <NavButton direction={leftDirection}/>
            <ActionButton action={action} onClick={onClick}/>
            <NavButton direction={rightDirection}/>   
        </nav>
    );
}

export default PageNav;