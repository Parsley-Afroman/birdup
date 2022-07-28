import CloudGraphic from "../Atoms/CloudGraphic";
import Header from "../Atoms/Header";

interface pageTitleProps 
{
    oppositeTrue: boolean,
    oppositeFalse: boolean
}

/*
    Function enables a header to be created for the page
        -: the required props here are described within the individual atoms (Header is static and required props)
*/ 

function PageTitle ({oppositeTrue, oppositeFalse} : pageTitleProps) 
{
    return (
        <header>
            <CloudGraphic opposite={oppositeFalse}/>
            <Header/>
            <CloudGraphic opposite={oppositeTrue}/>     
        </header>
    )
}

export default PageTitle;