import { ReactElement } from "react"

const Card = (props : any) : ReactElement<HTMLDivElement> => {
return (
        <>
            <div className="card">
                {props.children}
            </div>
        </>
    )
}

export default Card