import EntityCard from "../Molecules/EntityCard";
import {v4 as uuid} from 'uuid'
import { ReactElement } from "react";

interface cardArrayProps {
    birdData: object;
}

interface entityProps {
    name: string;
    image: string;
    strength: number; 
    intelligence: number;
    origin: string;
}

function CardArray ({birdData} : cardArrayProps) : ReactElement<cardArrayProps>
{
    function render (birdData : any)
    {
        let result : ReactElement[] = [];
        birdData.map((entity : entityProps) : void => {
            let uuID : string = uuid();
            result.push(<div id={uuID} key={uuID}><EntityCard birdName={entity.name} imageRef={entity.image} statType={'entityCard'} strength={entity.strength} intelligence={entity.intelligence} origin={entity.origin} details={'na'} key={uuid()}/></div>)
        });
        return result.map((entry) => {
            return entry;
        });
    }
    return (
        <main className="cardArray">
       {render(birdData)}
        </main>
    );
}

export default CardArray;