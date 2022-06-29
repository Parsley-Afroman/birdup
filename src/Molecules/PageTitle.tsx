import CloudGraphic from "../Atoms/CloudGraphic";
import Header from "../Atoms/Header";

interface pageTitleProps {
    oppositeTrue: boolean;
    oppositeFalse: boolean;
}

function PageTitle ({oppositeTrue, oppositeFalse} : pageTitleProps) 
{
    return (
        <header>
            <CloudGraphic opposite={oppositeFalse}/>
            <Header/>
            <CloudGraphic opposite={oppositeTrue}/>     
        </header>
    );
}

export default PageTitle;