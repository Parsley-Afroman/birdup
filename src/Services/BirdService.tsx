
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
    },

    // AddSingleBird: ()=>
    // {   
    //     const createSingleBirdRequest = [1];
    //     return createSingleBirdRequest;
    // },
}
export default BirdService;