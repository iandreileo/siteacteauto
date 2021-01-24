import {BASE_URL} from '../utils/Constants';
import axios from 'axios';


export const generateDocuments = async (data) => {

    axios.get(`${BASE_URL}/generate`, {responseType: 'blob', params : {
        data: data
    }})
        .then(res => {
            console.log(data)
            const file = new Blob(
                [res.data], 
                {type: 'application/pdf'});
            //Build a URL from the file
            const fileURL = URL.createObjectURL(file);
            //Open the URL on new Window
            window.open(fileURL);
            console.log(res); 
        });
}
