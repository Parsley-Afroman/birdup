import { ButtonHTMLAttributes, PropsWithRef, ReactElement } from "react"

const Header = ({classNameValue} : any) : ReactElement<HTMLHeadingElement> => {
return <h1 className={classNameValue}>BirdUp</h1>
}

export default Header