import ApiService from "./ApiService";


const BirdService = {
   
    GetAllBirds: async () : Promise<any> => 
    {
        const allBirdsRequest = await ApiService('/birds');
        return allBirdsRequest;
    },

    GetSingleBird: (birdID : Number) : Promise<any> =>
    {
        const singleBirdRequest = ApiService(`/bird/${birdID}`);
        return singleBirdRequest;
    },
}
export default BirdService;