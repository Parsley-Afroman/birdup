import { ReactElement } from "react";

async function ApiService(route : string) : Promise<Response>
{
    let response : Response = await fetch(process.env.REACT_APP_API_URL + route);
    const birdData : Promise<Response> = await response.json();
    return birdData;
}

export default ApiService;