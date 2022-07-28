/*
    Function enables a modal element to be created so that it can be populated by nested components
    - props: this enables the components to be nested by using props.children; it also contains any other variable dependencies the component has
    - type: is what the modal is going to contain e.g. 'add' is a modal for adding an entity
    - display: is for the modal's visibility (e.g. 'hide' displays the modal as 'none')
*/

function Modal(props : any)
{
    return (
            <div className={"modalBackground " + props.type + ' ' + props.display}>
                <div className="modalBoxOutline">
                    <div id={props.id} className="modalBox">
                        {props.children}
                    </div>
                </div>
            </div>
    )
}

export default Modal;