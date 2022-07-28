import EntityCard from "../Molecules/EntityCard";
import {v4 as uuid} from 'uuid';
import { ReactElement } from "react";

interface cardArrayProps 
{
    birdData: object
}

interface entityProps 
{
    name: string,
    image: string,
    strength: number,
    intelligence: number,
    origin: string
}

/*
    Function enables an array of card components to be rendered within a parent container
        -: the required props here are described within the individual molecule
*/ 

function CardArray ({birdData} : cardArrayProps) : ReactElement<cardArrayProps>
{
    /*
        Function enables the API data to be iterated through and creates an array of hydrated components;
        that array is then returned using .map to be able to return each individual entry from the array
    */ 
    function render (birdData : any)
    {
        // prepares the array
        let result : ReactElement[] = [];
        // iterates through the API data
        birdData.map((entity : entityProps) : void => 
        {
            // applies a unique id for the component key as it will otherwise throw an error
            let uuID : string = uuid();
            // pushes the component into the result array
            result.push(<div id={uuID} key={uuID}><EntityCard birdName={entity.name} imageRef={entity.image} statType={'entityCard'} strength={entity.strength} intelligence={entity.intelligence} origin={entity.origin} details={'na'} key={uuid()}/></div>)
        });
        // returns an iteration through the result array to render each individual entry
        return result.map((entry) => 
        {
            return entry
        })
    }
    return (
        <main className="cardArray">
            {/* calls the function and which renders the entities */}
            {render(birdData)}
        </main>
    )
}

export default CardArray;