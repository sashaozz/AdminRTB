import axios from 'axios';

var root = 'http://localhost:5000/';

export async function Get(path: string): Promise<any> {
    var serverRequest = axios.get(root + path);
    var resp = await serverRequest;
    return resp;
}