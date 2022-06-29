import HomeTemplate from "../Templates/HomeTemplate"
import BirdService from "../Services/BirdService"
import { useState, useEffect } from "react"

function HomePage ({method}  : any) {
    const [birdData, setBirdData] = useState([])
    useEffect(() => {
        method === 'all' 
        ? BirdService.GetAllBirds().then(response => {setBirdData(response.data)})
        : BirdService.GetSingleBird(1).then(response => {setBirdData(response.data)})
    }, [])
    // the template needs hydrating with data and that needs passing through here as props.
    // here is where our database connection needs to be made and passed through
    // the type of database connection can be determined at App level e.g. for the Homepage returning all results or search results
    return (
        <>
            <HomeTemplate birdData={birdData} opposite={true} leftDirection={'up'} rightDirection={'down'} action={'add'}/>
        </>
    )
    }
    
    export default HomePage