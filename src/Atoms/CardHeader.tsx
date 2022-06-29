import { ReactElement } from 'react';

function CardHeader ({birdName} : any) : ReactElement<HTMLElement> 
{
    return <h3>{birdName}</h3>;
}

export default CardHeader;