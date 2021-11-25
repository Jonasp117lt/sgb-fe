import { getToken } from "./auth"

export const fetchDataRequest = async (route, method = "get", data) => {
    const token = getToken()
    return await axios[method.toLowerCase()](
        `${process.env.REACT_APP_API_ROUTE}/${route}`,
        {
            ...data,
            headers: { 'Authorization': `Bearer ${token?.access_token}` }
        },
        { headers: { 'Authorization': `Bearer ${token?.access_token}` } })
        .then(response => { return response.data })
        .catch(error => {
            if (error.response) {
                return { message: error.message, code: error.response.status }
            }
            else {
                return error
            }
        })
}