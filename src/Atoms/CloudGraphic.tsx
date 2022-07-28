import { ReactElement } from 'react';
import Cloud from '../Assets/Cloud.svg';

interface cloudProps 
{
    opposite: boolean
}
/*
    Function enables you to implement the cloud graphic 
        - opposite: sets the className so that the graphic can be mirrored for the opposite
*/

function CloudGraphic ({opposite} : cloudProps) : ReactElement<HTMLImageElement> 
{
    // className is dynamically set with a basline value of 'cloud' with its accompanying direction
    return (
        <img className={'cloud ' + (opposite  ? 'right' : 'left')} src={Cloud}/>
    ) 
    
}

export default CloudGraphic;