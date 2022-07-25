import PageTitle from "../Molecules/PageTitle";
import PageNav from "../Molecules/PageNav";

interface pageBannerProps {
  oppositeTrue: boolean;
  oppositeFalse: boolean;
  leftDirection: string; 
  rightDirection: string; 
  action: string;
  setAddModal: Function;
}

function PageBanner ({oppositeTrue, oppositeFalse, leftDirection, rightDirection, action, setAddModal} : pageBannerProps) 
{
    return (
      <div id="pageBanner">
        <PageTitle oppositeTrue={oppositeTrue} oppositeFalse={oppositeFalse}/>
        <PageNav leftDirection={leftDirection} rightDirection={rightDirection} action={action} setAddModal={setAddModal}/>
      </div>
    );
}

export default PageBanner;