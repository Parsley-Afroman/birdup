import { stringify } from "querystring";
import React, { ReactElement, useState } from "react";

const ApiService = 
{
    GetApiService: async (route : string) : Promise<Response> =>
    {
        let response : Response = await fetch(process.env.REACT_APP_API_URL + route);
        const birdData : Promise<Response> = await response.json();
        return birdData;
    },

    PostApiService: 
    {   
        
        CreateSingleBird: (formData : any) => {
            // var details = {
            //     'name': 'test@gmail.com',
            //     'origin': 'Password!',
            //     'diet': 'password',
            //     'age': 10,
            //     'real': 1,
            //     'strength': 50,
            //     'intelligence': 50,
            //     'image': 'password',
            // };
            let details = formData
            console.log(details + 'details YO!')
            var formBody : any = [];
            for (var property in details) {
              var encodedKey = encodeURIComponent(property);
              var encodedValue = property == 'name' ? encodeURIComponent(details['name']) : 
                                    property == 'origin' ? encodeURIComponent(details['origin']) :
                                        property == 'diet' ? encodeURIComponent(details['diet']) :
                                            property == 'age' ? encodeURIComponent(details['age']) :
                                                property == 'real' ? encodeURIComponent(details['real']) :
                                                    property == 'strength' ? encodeURIComponent(details['strength']) :
                                                        property == 'intelligence' ? encodeURIComponent(details['intelligence']) :
                                                        encodeURIComponent(details['image']) ;
              formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");
            
            fetch(process.env.REACT_APP_API_URL + '/birds', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
              },
              body: formBody
            })
            // resets the values shown in the form
            // const defaultFormData = {
            //     name: '',
            //     origin: '',
            //     diet: '',
            //     age: 0,
            //     real: 0,
            //     strength: 0, 
            //     intelligence: 0,
            //     image: '',
                
            // }
            // const[formData, setFormData] = useState(defaultFormData)
            // const {name, origin, diet, age, real, strength, intelligence, image} = formData

            // const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
            //     setFormData((prevState) => ({
            //         ...prevState, 
            //         [e.target.name]: e.target.value,
                    
            //     }))
            //     console.log(formData)
            // }

            // const onSubmit = (e : React.FormEvent<HTMLFormElement>) => {
                // e.preventDefault()
            //     console.log(formData)

            //     setFormData(defaultFormData)
            // }
            
            return  (
                <>
                {/* iframe is for the form to direct to so that you aren't redirected to the action path; just the form submission */}
                {/* as a raw form it submits fine */}
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
                </>)
        }
    
        
    }
}


export default ApiService;

// ^(?![\s\S])
// ^[0-9A-Za-z]+$