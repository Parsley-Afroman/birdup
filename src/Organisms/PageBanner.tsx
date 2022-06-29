import PageTitle from "../Molecules/PageTitle";
import PageNav from "../Molecules/PageNav";


function PageBanner ({opposite, leftDirection, rightDirection, action} : any) {
      
    return (
      <div id="pageBanner">
        <PageTitle opposite={opposite}/>
        <PageNav leftDirection={leftDirection} rightDirection={rightDirection} action={action}/>
      </div>
    )
}

export default PageBanner;