/*
    Created an object within ApiService so that the single component can contain all required functionality for 
    touching the API

    !Try Catch should be implemented for a controlled an informative error response¡
*/ 
const ApiService = 
{
    /*
        Function enables a get request to be fulfilled - in this instance it is retrieving all entities
        (This should be structured like the PostApiService so that it can be separated into getAll getOne)
        It uses an Aysnc method so that all data and functionality executes in sync to render a page populated by data
        (without, it would delay the processing of the page)
            - route: is the API endpoint from which the data can be derived
    */ 
    GetApiService: async (route : string) : Promise<Response> =>
    {
        let response : Response = await fetch(process.env.REACT_APP_API_URL + route);
        const birdData : Promise<Response> = await response.json();
        // this return will need to be accessed using .then in order to access the promoise
        return birdData;
    },

    /*
        This is an object that has another object nested within it - the nested object contains the functionality to be 
        called under this object. Dot notation is required to get access to the nested object.
    */ 
    PostApiService: 
    {   
        /* 
            Function enables the creation of an entity that is sent the DB via an API endpoint
                - formData: is an object that contains the information relating to the entity.
        */ 
        CreateSingleBird: (formData : any) => 
        {
       
            let details = formData
            var formBody : any = [];
            // accessing the values within the formData object
            for (var property in details) 
            {
                // Encodes the key to the value so that it is able to be transferred as a URIComponent (how the API accepts data)
              var encodedKey = encodeURIComponent(property);
                // Checks the type of property and then encodes the value to match the key so it can be transferred          
              var encodedValue = property === "name" ? encodeURIComponent(details["name"]) : 
                                    property === "origin" ? encodeURIComponent(details["origin"]) :
                                        property === "diet" ? encodeURIComponent(details["diet"]) :
                                            property === "age" ? encodeURIComponent(details["age"]) :
                                                property === "real" ? encodeURIComponent(details["real"]) :
                                                    property === "strength" ? encodeURIComponent(details["strength"]) :
                                                        property === "intelligence" ? encodeURIComponent(details["intelligence"]) :
                                                        encodeURIComponent(details["image"]) ;
                // Adds the encoded key and value to an array that will form the body of the POST request 
              formBody.push(encodedKey + "=" + encodedValue);
            }
            // Amends the array to a string that is concatinated by & to form the correct syntax for the POST request
            formBody = formBody.join("&");
            
            // Has the endpoint hardcoded into the fetch request (this could be made into an async function)
            fetch(process.env.REACT_APP_API_URL + '/birds', 
                {
                    method: 'POST',
                    // This is how the API accepts data
                    headers: 
                    {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    },
                    // This is the data we turned into a string above
                    body: formBody
                }
            )
            
            return  (
                <>
                {/* iframe is for the form to direct to so that you aren't redirected to the action path; just the form submission */}
                    <iframe name="maintainFrame" id="maintainFrame" ></iframe>
                    <form method='post' action='http://localhost:8080/birds' target="maintainFrame">
                        <label>Name</label>
                            <input type='text' name='name'></input>
                        <label>Origin</label>
                            <input type='text' name='origin'></input>
                        <label>Diet</label>
                            <input type='text' name='diet' ></input>
                        <label>Age</label>
                            <input type='number' name='age' ></input>
                        <label>Real</label>
                            <input type='number' name='real' ></input>
                        <label>Strength</label>
                            <input type='number' name='strength' ></input>
                        <label>Intelligence</label>
                            <input type='number' name='intelligence' ></input>
                        <label>Image</label>
                            <input type='text' name='image' ></input>
                            <input type='submit' value='Submit'></input>
                    </form>
                </>
            )
        }
    
        
    }
}


export default ApiService;