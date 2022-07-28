import { ReactElement } from "react";

/*
    Function enables a header to be created (atm it is hard-coded, however, it can have props passed though for it)
*/

function Header () : ReactElement<HTMLHeadingElement> 
{
    return (
        <h1>BirdUp</h1>
    )
}

export default Header;