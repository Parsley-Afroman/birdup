import { ReactElement } from 'react';

const EntityImage = ({imageRef} : any) : ReactElement<HTMLImageElement> => {
    return <img className="entityImage" src={imageRef}/>
    
}

export default EntityImage;