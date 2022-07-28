
/* 
    This variable is an object containing the ApiService requests.

    If the document contained rooting then this would be reconsidered as each method within the object correlates the a 
    request from the controller, however, without routing, it isn't necessary to have this.
*/ 

const BirdService = {
   
    GetAllBirds: async (ApiService : any) : Promise<any> => 
    {
        const allBirdsRequest : Promise<JSON> = await ApiService.GetApiService('/birds');
        return allBirdsRequest;
    },

    GetSingleBird: (ApiService : any, birdID : Number) : Promise<any> =>
    {
        const singleBirdRequest : Promise<JSON> = ApiService.GetApiService(`/bird/${birdID}`);
        return singleBirdRequest;
    }
}
export default BirdService;