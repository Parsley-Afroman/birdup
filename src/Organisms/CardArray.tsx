import EntityCard from "../Molecules/EntityCard";

function CardArray ({birdData} : any) 
{
    function render (birdData : any)
    {
        let result : any[] = [];
        birdData.map((entity : any) => {
            result.push(<EntityCard birdName={entity.name} imageRef={entity.image} statType={'entityCard'} strength={entity.strength} intelligence={entity.intelligence} origin={entity.origin} details={'na'}/>)
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