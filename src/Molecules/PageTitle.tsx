import CloudGraphic from "../Atoms/CloudGraphic";
import Header from "../Atoms/Header";

function PageTitle ({opposite} : any) 
{
    return (
        <header>
            <CloudGraphic/>
            <Header/>
            <CloudGraphic opposite={opposite}/>     
        </header>
    );
}

export default PageTitle;