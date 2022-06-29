import NavButton from "../Atoms/NavButton";
import ActionButton from "../Atoms/ActionButton";

function PageNav ({leftDirection, rightDirection, action} : any) {
// pass down through props the nav directions and button action
    return (
        <nav>
            <NavButton direction={leftDirection}/>
            <ActionButton action={action}/>
            <NavButton direction={rightDirection}/>   
        </nav>
    )
}

export default PageNav