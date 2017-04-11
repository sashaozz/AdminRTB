import axios from 'axios';
import * as popupManager from '../components/popups/popup-manager';

var root = 'http://localhost:5000';

export async function Get<T>(path: string): Promise<T> {
    try {
        var serverRequest = axios.get(root + path,
            {
                withCredentials: true
            });
        var resp = await serverRequest;
        return <T>resp.data;
    }
    catch (e) {
        if (e.response.status == 401) {
            popupManager.LoginPopupInstance.isOpened = true;
        }
        throw e;
    }
}

export async function Post<T>(path: string, data: any): Promise<T> {
    try {
        var serverRequest = axios.post(root + path, data,
            {
                withCredentials: true
            });
        var resp = await serverRequest;
        return <T>resp.data;
    }
    catch (e) {
        if (e.response.status == 401) {
            popupManager.LoginPopupInstance.isOpened = true;
        }
        throw e;
    }
}

export async function Put<T>(path: string, data: any): Promise<T> {
    try {
        var serverRequest = axios.put(root + path, data,
            {
                withCredentials: true
            });
        var resp = await serverRequest;
        return <T>resp.data;
    }
    catch (e) {
        if (e.response.status == 401) {
            popupManager.LoginPopupInstance.isOpened = true;
        }
        throw e;
    }
}