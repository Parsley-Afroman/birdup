import { ReactElement } from 'react';

function EntityImage ({imageRef} : any) : ReactElement<HTMLImageElement> {
    return <img className="entityImage" src={imageRef}/>
    
}

export default EntityImage;