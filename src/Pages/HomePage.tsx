import HomeTemplate from "../Templates/HomeTemplate";
import { useState, useEffect } from "react";
import BirdServiceController from "../Controllers/BirdServiceController";

interface homePageProps {
    method: string;
}

function HomePage ({method}  : homePageProps) 
{
    const [birdData, setBirdData] : [object, Function]= useState([]);
    const [entity, setEntity] : [number, Function]= useState(1);
    useEffect(() => 
    {
        BirdServiceController(method, entity).then((response : any) => {setBirdData(response)});
    }, [])
    return (
        <>
            <HomeTemplate birdData={birdData} oppositeTrue={true} oppositeFalse={false} leftDirection={'up'} rightDirection={'down'} action={'add'}/>
        </>
    );
}
    
export default HomePage;