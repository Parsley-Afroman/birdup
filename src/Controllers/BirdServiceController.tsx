import BirdService from "../Services/BirdService";
import ApiService from "../Services/ApiService";

/* 
    Function is to handle what entities are meant to be fetched but it doesn't appear necessary as it adds a layer of complexity a single page 
    document doesn't require.

    If the document contained rooting then this would be reconsidered as each route would point to a controller
*/ 

function BirdServiceController (method  : any, entity : number) : Promise<object> 
{
    return method === 'all' 
    ? BirdService.GetAllBirds(ApiService).then(response => {return response.data})
    : BirdService.GetSingleBird(ApiService, entity).then(response => {return response.data});
}

export default BirdServiceController;