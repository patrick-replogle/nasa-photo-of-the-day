import axios from "axios";

export function getNasaData(setter) {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then((response) => {
            //console.log(response);
            setter(response.data.hdurl)
        })
        .catch((error) => {
            console.log('error', error)
        })
}
