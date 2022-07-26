import { useState } from "react";
import DuckGraphic from "../Atoms/DuckGraphic";
import Modal from "../Atoms/Modal";
import AddForm from "../Molecules/AddForm";
import CardArray from "../Organisms/CardArray";
import PageBanner from "../Organisms/PageBanner";

interface homeTemplateProps {
    birdData: object;
    oppositeTrue: boolean;
    oppositeFalse: boolean; 
    leftDirection: string; 
    rightDirection: string; 
    action: string;
}

function HomeTemplate ({birdData, oppositeTrue, oppositeFalse, leftDirection, rightDirection, action} : homeTemplateProps, props : any) {

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

export default HomeTemplate