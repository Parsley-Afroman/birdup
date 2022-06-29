import HomeTemplate from "../Templates/HomeTemplate";
import { useState, useEffect } from "react";
import BirdServiceController from "../Controllers/BirdServiceController";

function HomePage ({method}  : any) 
{
    const [birdData, setBirdData] = useState([]);
    const [entity, setEntity] = useState(1);
    useEffect(() => {
        BirdServiceController(method, entity).then((response : any) => {setBirdData(response)});
    }, [])
    return (
        <>
            <HomeTemplate birdData={birdData} opposite={true} leftDirection={'up'} rightDirection={'down'} action={'add'}/>
        </>
    );
}
    
export default HomePage;