import PageTitle from "../Molecules/PageTitle";
import PageNav from "../Molecules/PageNav";

interface pageBannerProps 
{
  oppositeTrue: boolean,
  oppositeFalse: boolean,
  leftDirection: string,
  rightDirection: string, 
  action: string,
  setAddModal: Function
}

/*
  Function enables the creation of the top of the page that contains the title and navigation components
    -: the required props here are described within the individual molecules

    !missing a return type on the function¡
*/ 

function PageBanner ({oppositeTrue, oppositeFalse, leftDirection, rightDirection, action, setAddModal} : pageBannerProps) 
{
    return (
      <div id="pageBanner">
        <PageTitle oppositeTrue={oppositeTrue} oppositeFalse={oppositeFalse}/>
        <PageNav leftDirection={leftDirection} rightDirection={rightDirection} action={action} setAddModal={setAddModal}/>
      </div>
    )
}

export default PageBanner;