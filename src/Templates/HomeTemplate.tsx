import { useState } from "react";
import DuckGraphic from "../Atoms/DuckGraphic";
import Modal from "../Atoms/Modal";
import AddForm from "../Molecules/AddForm";
import CardArray from "../Organisms/CardArray";
import PageBanner from "../Organisms/PageBanner";

interface homeTemplateProps 
{
    birdData: object,
    oppositeTrue: boolean,
    oppositeFalse: boolean, 
    leftDirection: string,
    rightDirection: string, 
    action: string,
}

/*
    Function acts as a template for the final page render, it contains all the components that will be hydrated as a page
     -: the required props here are described within the individual organisms

*/ 

function HomeTemplate ({birdData, oppositeTrue, oppositeFalse, leftDirection, rightDirection, action} : homeTemplateProps, props : any) 
{
    // handles the visibility of the addModal
    const [addModal, setAddModal] = useState('hide')

    return (
        <>
            <Modal type={'add'} display={addModal} id={'addBird'}>
                <DuckGraphic oppositeTrue={false}/>
                <AddForm formName={'createBird'} formType={'addForm'} setAddModal={setAddModal}/>
            </Modal>
            <PageBanner oppositeTrue={oppositeTrue} oppositeFalse={oppositeFalse} leftDirection={leftDirection} rightDirection={rightDirection} action={action} setAddModal={setAddModal}/>
            <CardArray birdData={birdData}/>
        </>
    )
}

export default HomeTemplate;