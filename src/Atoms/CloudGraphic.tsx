import { ReactElement } from 'react';
import Cloud from '../Assets/Cloud.svg';

interface cloudProps {
    opposite: boolean;
}

function CloudGraphic ({opposite} : cloudProps) : ReactElement<HTMLImageElement> 
{
    return <img className={'cloud ' + (opposite  ? 'right' : 'left')} src={Cloud}/>;
    
}

export default CloudGraphic;