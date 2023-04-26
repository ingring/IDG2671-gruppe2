import axios from '../axios/axios'
import useAuth from './useAuth'
const refreshURL = '/api/refresh'

const useRefreshToken = () => {

    const { setAuth } = useAuth()

    const refresh = async() => {
        const response = await axios.get(refreshURL, {
            withCredentials: true
        })
        setAuth(prev =>{
            console.log(JSON.stringify(prev))
            console.log(response.data.accesstoken)
            return { ...prev, accesstoken: response.data.accesstoken}
        })

        return response.data.accessToken
    }

    return refresh

}

export default useRefreshToken