import { useEffect, useState } from "react";
import EntityCard from "../Molecules/EntityCard";
import BirdService from "../Services/BirdService";

function CardArray () {
    const [birdData, setBirdData] = useState([])
    useEffect(() => {
        BirdService.GetAllBirds().then(response => {setBirdData(response.data)})
    }, [])

    function render (birdData : any){
        let result : any[] = []
        birdData.map((entity : any) => {
            result.push(<EntityCard birdName={entity.name} imageRef={entity.image} statType={'entityCard'} strength={entity.strength} intelligence={entity.intelligence} origin={entity.origin} details={'na'}/>)
        })
        return result.map((entry) => {
            return entry
        })
    }
    return (
        <div className="cardArray">
       {render(birdData)}
        </div>
    )
}

export default CardArray;