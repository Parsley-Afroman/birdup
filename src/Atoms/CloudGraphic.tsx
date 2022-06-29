import { ReactElement } from 'react';
import Cloud from '../Assets/Cloud.svg';

function CloudGraphic ({opposite} : any) : ReactElement<HTMLImageElement> 
{
    return <img className={'cloud ' + (opposite  ? 'right' : 'left')} src={Cloud}/>;
    
}

export default CloudGraphic;