import axios from "axios";
import Cookies from "js-cookie";

export async function GetCurrentInfosApi() {
    const token = Cookies.get("auth_token");
    const request = await axios.get(`${process.env.REACT_APP_HOST_NAME}/user/driver/profil`, {
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


export async function patchPersonnalInformationsApi(userInformations) {
    const token = Cookies.get("auth_token");
    const request = await axios.patch(`${process.env.REACT_APP_HOST_NAME}/user/driver/profil`, userInformations,{
        headers: {
            Authorization: `Bearer ${token}`
        },
        withCredentials: true,
        credentials: 'include'
    });
    const data = request.data;
    return data;
}