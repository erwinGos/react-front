import axios from "axios";
import Cookies from "js-cookie";

export async function GetClientCarsApi(parameters) {
    const token = Cookies.get("auth_token");
    const request = await axios.get(`${process.env.REACT_APP_HOST_NAME}/user/driver/cars?page=${parameters.page}&size=${parameters.size}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        withCredentials: true,
        credentials: 'include'
    });
    const data = request.data;
    return data;
}

export async function GetBrandListApi() {
    const token = Cookies.get("auth_token");
    const request = await axios.get(`${process.env.REACT_APP_HOST_NAME}/user/driver/cars/brands`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        withCredentials: true,
        credentials: 'include'
    });
    const data = request.data;
    return data;
}

export async function GetBrandModelsApi(brand) {
    const token = Cookies.get("auth_token");
    const request = await axios.get(`${process.env.REACT_APP_HOST_NAME}/user/driver/cars/brands/${brand}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        withCredentials: true,
        credentials: 'include'
    });
    const data = request.data;
    return data;
}

export async function SetDefaultCarApi(parameters) {
    const token = Cookies.get("auth_token");
    const request = axios({
        method: "PUT",
        url: `${process.env.REACT_APP_HOST_NAME}/user/driver/cars/setDefault/${parameters}`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        withCredentials: true,
        credentials: 'include'
    });
    
    const data = request.data;
    return data;
}

export async function UpdateClientCarApi(payload) {
    const token = Cookies.get("auth_token");
    const request = await axios.patch(`${process.env.REACT_APP_HOST_NAME}/user/driver/cars/${payload.id}`, payload,{
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        withCredentials: true,
        credentials: 'include'
    });
    const data = request.data;
    return data;
}

export async function CreateClientCarApi(payload) {
    const token = Cookies.get("auth_token");
    const request = await axios.post(`${process.env.REACT_APP_HOST_NAME}/user/driver/cars`, payload,{
        headers: {
            'Content-Type': '*/*',
            Authorization: `Bearer ${token}`,
            Host: process.env.REACT_APP_BACKEND_SERVER_ADDRESS
        },
        withCredentials: true,
        credentials: 'include'
    });

    const data = request.data;
    return data;
}