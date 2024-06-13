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


    const request = await fetch(`${process.env.REACT_APP_HOST_NAME}/user/driver/cars`, {
        method: "POST",
        body: JSON.stringify({...payload, nbPlace : parseInt(payload.nbPlace), year: parseInt(payload.year)}),
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    })

    const data = request.data;
    return data;
}