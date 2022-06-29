import BirdService from "../Services/BirdService";
import ApiService from "../Services/ApiService";

function BirdServiceController (method  : any, entity : number) : Promise<object> 
{
    return method === 'all' 
    ? BirdService.GetAllBirds(ApiService).then(response => {return response.data})
    : BirdService.GetSingleBird(ApiService, entity).then(response => {return response.data});
}

export default BirdServiceController;