import { ReactElement } from 'react';

interface birdProps {
    birdName: string;
}

function CardHeader ({birdName} : birdProps) : ReactElement<HTMLElement> 
{
    return <h3>{birdName}</h3>;
}

export default CardHeader;