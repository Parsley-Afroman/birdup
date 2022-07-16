interface modalProps {
    display?: string | '',
}

function Modal(props : any)
{
    return (
        <>
            <div className={"modalBackground " + props.type + ' ' + props.display}>
                <div className="modalBoxOutline">
                    <div className="modalBox">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Modal;