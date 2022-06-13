async function apiService() : Promise<any> {
        let response = await fetch(process.env.REACT_APP_API_URL + '/birds')
        const birdData = await response.json()
        return birdData
}

export default apiService