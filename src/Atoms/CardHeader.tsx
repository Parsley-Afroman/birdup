import { ReactElement } from 'react';

interface birdProps 
{
    birdName: string
}
/* 
    Function enables you to create a generic header (the props should be changed to be more generic)
*/

function CardHeader ({birdName} : birdProps) : ReactElement<HTMLElement> 
{
    return (
        <h3>
            {birdName}
        </h3>
    )
}

export default CardHeader;