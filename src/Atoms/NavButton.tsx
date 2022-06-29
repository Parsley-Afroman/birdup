import { ReactElement } from "react"
function NavButton ({direction} : any) : ReactElement<HTMLAnchorElement> {
   
    return <a href={direction === 'down' ? '#footer' : '#pageBanner'} className={direction}>{direction == 'up' || direction == 'down' ? '^' : ''}</a>
}

export default NavButton