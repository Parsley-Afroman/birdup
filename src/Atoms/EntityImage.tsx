import { ReactElement } from 'react';

interface entityImageProps 
{
    imageRef: string
}

/*
    Function enables you to implement the entity image
        - imageRef: is the source for the image which is extracted from the MySQL DB
*/

function EntityImage ({imageRef} : entityImageProps) : ReactElement<HTMLImageElement> 
{
    // imageRef is the http address of the image (CloudGraphic DuckGraphic & EntityImage could be merged into a single component of image)
    return (
        <img className="entityImage" src={imageRef}/>
    )
}

export default EntityImage;