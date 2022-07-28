import HomeTemplate from "../Templates/HomeTemplate";
import { useState, useEffect, ReactComponentElement } from "react";
import BirdServiceController from "../Controllers/BirdServiceController";

interface homePageProps 
{
    method: string
}


/*
    Function unites the template with the database to form the page
        - method: determines what is being fetched from the API (i.e. all the entities or a single entity)

    !missing a return type on the function¡
*/ 

function HomePage ({method}  : homePageProps)
{
    // useState for handling the API data
    const [birdData, setBirdData] : [object, Function]= useState([]);
    // not currently utilised but it selects the id value of the single entity intended to be shown
    const [entity, setEntity] : [number, Function]= useState(1);
    /* fulfils the fetch request so that it appears in parsetime 
    (without this - the fetch would not render due to how runtime & parsetime work)
    an empty [¿variable?] means it occurs on page load */
    useEffect(() => 
    {
        // access the data in the fetsh request using .then and apply it using a setter 
        BirdServiceController(method, entity).then((response : any) => 
        {
            setBirdData(response)
        });
    }, []);
    return (
        <>
            <HomeTemplate birdData={birdData} oppositeTrue={true} oppositeFalse={false} leftDirection={'up'} rightDirection={'down'} action={'add'}/>
        </>
    )
}
    
export default HomePage;