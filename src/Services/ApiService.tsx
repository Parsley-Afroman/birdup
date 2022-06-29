import { ReactElement } from "react";

async function ApiService(route : string) : Promise<any | ReactElement<any, any>> 
{
    let response = await fetch(process.env.REACT_APP_API_URL + route);
    const birdData = await response.json();
    return birdData;
}

export default ApiService;