import { ReactElement } from 'react';

const CardHeader = ({birdName} : any) : ReactElement<HTMLElement> => {
    return <h3>{birdName}</h3>
}

export default CardHeader;