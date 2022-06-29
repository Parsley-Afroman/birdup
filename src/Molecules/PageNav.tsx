import NavButton from "../Atoms/NavButton";
import ActionButton from "../Atoms/ActionButton";

interface pageNavProps {
    leftDirection: string;
    rightDirection: string;
    action: string;
}

function PageNav ({leftDirection, rightDirection, action} : pageNavProps) 
{
    return (
        <nav>
            <NavButton direction={leftDirection}/>
            <ActionButton action={action}/>
            <NavButton direction={rightDirection}/>   
        </nav>
    );
}

export default PageNav;