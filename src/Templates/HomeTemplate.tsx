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

function HomeTemplate ({birdData, oppositeTrue, oppositeFalse, leftDirection, rightDirection, action} : homeTemplateProps) {
return (
    <>
        <PageBanner oppositeTrue={oppositeTrue} oppositeFalse={oppositeFalse} leftDirection={leftDirection} rightDirection={rightDirection} action={action}/>
        <CardArray birdData={birdData}/>
    </>
)
}

export default HomeTemplate