import { ReactElement } from "react"

const NavButton = ({direction} : any) : ReactElement<HTMLAnchorElement> => {
return <a href="#" className={direction}>{direction == 'up' || direction == 'down' ? '^' : ''}</a>
}

export default NavButton