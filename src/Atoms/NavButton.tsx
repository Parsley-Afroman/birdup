import { ReactElement } from "react";

interface navButtonProps 
{
    direction: string,
}

/* 
Function enables you to create a button with a particlar functionaliy:
    - direction: determines the direction the nav button (could be integrated into the ActionButton & ActionButton could just be Button)
*/
function NavButton ({direction} : navButtonProps) : ReactElement<HTMLAnchorElement> 
{
    // href is determined by the direction and the page contents are tagged accordingly
    // The anchor is labelled using a Circumflex that is flipped for the opposite (could it be replaced by a Caron so that the flipping isn't needed is SCSS?)
    return(
        <a href={direction === 'down' ? '#footer' : '#pageBanner'} className={direction}>
            {/* conditionally renders if a directional value is set and allocates a character if it is*/}
            {direction && '^'}
        </a>
    )
}

export default NavButton;