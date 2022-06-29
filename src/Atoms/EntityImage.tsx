import { ReactElement } from 'react';

interface entityImageProps {
    imageRef: string
}

function EntityImage ({imageRef} : entityImageProps) : ReactElement<HTMLImageElement> 
{
    return <img className="entityImage" src={imageRef}/>;
    
}

export default EntityImage;