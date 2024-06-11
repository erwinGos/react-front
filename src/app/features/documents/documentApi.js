import axios from "axios";
import Cookies from "js-cookie";

export async function GetRequiredDocumentsApi() {
    const token = Cookies.get("auth_token");
    const request = await axios.get(`${process.env.REACT_APP_HOST_NAME}/user/driver/required-documents`, {
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

export async function SendDocumentsApi(fileObject) {
    const token = Cookies.get("auth_token");
    const form = new FormData();
    form.append(fileObject.type, fileObject.file);
    const request = await axios.post(`${process.env.REACT_APP_HOST_NAME}/user/driver/documents/file`, 
        {file: fileObject.file[0], type: fileObject.type, description: ""},{
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
        },
        withCredentials: true,
        credentials: 'include'
    });
    const data = request.data;
    return data;
}

export async function GetSentDocumentsApi() {
    const token = Cookies.get("auth_token");
    const request = await axios.get(`${process.env.REACT_APP_HOST_NAME}/user/driver/documents`,{
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

