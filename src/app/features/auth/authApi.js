import axios from "axios";
import Cookies from "js-cookie";

export async function SignInApi(userCredentials) {
    const request = await axios.post(`${process.env.REACT_APP_HOST_NAME}/authenticate`, userCredentials, {
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true,
        credentials: 'include'
    });
    const data = request.data;
    Cookies.set('auth_token', data.id_token, { expires: 2 })
    return data;
}


export async function checkTokenValidityApi() {
    const token = Cookies.get("auth_token");
    const request = await axios.get(`${process.env.REACT_APP_HOST_NAME}/authenticate`, {
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