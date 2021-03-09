import {BASE_URL} from '../utils/Constants';
import axios from 'axios';


export const getDocuments = async () => {
    const request = await fetch(`${BASE_URL}/documents`);
    const data = await request.json();
    return data;
}
