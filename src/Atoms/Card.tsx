import { ReactElement } from "react";
/*
    Function creates a generic card element that the contents are to be nested within.
        - props: this enables dependencies to be passed into the function
*/

function Card (props : any ) : ReactElement<HTMLDivElement> 
{
    // props.children enables you to be able to nest elements within this one (e.g. <Card><NestedElement/></Card>)
    return (
            <>
                <div className="card">
                    {props.children}
                </div>
            </>
        )
}

export default Card;