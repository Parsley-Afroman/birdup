
const BirdService = {
   
    GetAllBirds: async (ApiService : any) : Promise<any> => 
    {
        const allBirdsRequest = await ApiService('/birds');
        return allBirdsRequest;
    },

    GetSingleBird: (ApiService : any, birdID : Number) : Promise<any> =>
    {
        const singleBirdRequest = ApiService(`/bird/${birdID}`);
        return singleBirdRequest;
    },
}
export default BirdService;