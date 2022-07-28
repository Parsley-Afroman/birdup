import NavButton from "../Atoms/NavButton";
import ActionButton from "../Atoms/ActionButton";
import { FormEventHandler } from "react";

interface pageNavProps 
{
    leftDirection: string,
    rightDirection: string,
    action: string,
    setAddModal: Function
}

/*
    Function enables a page naviagation section to be added to a parent component
    (on review: the navigation for down makes sense but the other needs to be fixed or positioned near the bottom; 
        alternatively, each card could have an up arrow on it )

        -: the required props here are described within the individual atoms
*/ 

function PageNav ({leftDirection, rightDirection, action, setAddModal} : pageNavProps) 
{
    const onClick : FormEventHandler<HTMLButtonElement> = () => 
    {
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