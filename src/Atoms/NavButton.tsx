import { ReactElement } from "react";

interface navButtonProps {
    direction: string;
}

function NavButton ({direction} : navButtonProps) : ReactElement<HTMLAnchorElement> 
{
    return <a href={direction === 'down' ? '#footer' : '#pageBanner'} className={direction}>{direction == 'up' || direction == 'down' ? '^' : ''}</a>;
}

export default NavButton;