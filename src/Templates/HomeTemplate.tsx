import DuckGraphic from "../Atoms/DuckGraphic";
import Modal from "../Atoms/Modal";
import AddForm from "../Molecules/AddForm";
import CardArray from "../Organisms/CardArray"
import PageBanner from "../Organisms/PageBanner"

interface homeTemplateProps {
    birdData: object;
    oppositeTrue: boolean;
    oppositeFalse: boolean; 
    leftDirection: string; 
    rightDirection: string; 
    action: string;
}

function HomeTemplate ({birdData, oppositeTrue, oppositeFalse, leftDirection, rightDirection, action} : homeTemplateProps, props : any) {
return (
    <>
        <Modal type={'add'} display={'hide'} id={'addBird'}>
            <DuckGraphic oppositeTrue={false}/>
            <AddForm formName={'createBird'}/>
        </Modal>
        <PageBanner oppositeTrue={oppositeTrue} oppositeFalse={oppositeFalse} leftDirection={leftDirection} rightDirection={rightDirection} action={action}/>
        <CardArray birdData={birdData}/>
    </>
)
}

export default HomeTemplate