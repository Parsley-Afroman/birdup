
const BirdService = {
   
    GetAllBirds: async (ApiService : any) : Promise<any> => 
    {
        const allBirdsRequest : Promise<JSON> = await ApiService('/birds');
        return allBirdsRequest;
    },

    GetSingleBird: (ApiService : any, birdID : Number) : Promise<any> =>
    {
        const singleBirdRequest : Promise<JSON> = ApiService(`/bird/${birdID}`);
        return singleBirdRequest;
    },
}
export default BirdService;