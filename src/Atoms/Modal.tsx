function Modal(props : any)
{
    return (
        <>
            <div className={"modalBackground " + props.type + ' ' + props.display}>
                <div className="modalBoxOutline">
                    <div id={props.id} className="modalBox">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Modal;