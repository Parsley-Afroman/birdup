import { ReactElement } from 'react';
import Duck from '../Assets/Duck.svg';

interface duckProps 
{
    oppositeTrue: boolean
}

/*
    Function enables you to implement the duck graphic 
        - oppositeTrue: sets the className so that the graphic can be mirrored for the opposite (this image could be passed through as props and both the cloud
            and the duck graphic could be rendered through the same function)
*/

function DuckGraphic ({oppositeTrue} : duckProps) : ReactElement<HTMLImageElement> 
{
    // The div acts as a wrapper for being able to specifically position the image and scale it relative to its parent container.
    // Image src is imported and implemented, however, this could be passed through as props e.g.(imageType)
    return (
            <div className='duckBox'>
                <img className={'duck' + (oppositeTrue  ? 'right' : 'left')} src={Duck}/>
            </div>
        )
}

export default DuckGraphic;