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
            console.log('prev', JSON.stringify(prev))
            console.log('new token:', response.data.accesstoken)
            return { ...prev, accesstoken: response.data.accesstoken, username: response.data.username}
        })

        return response.data.accessToken
    }

    return refresh

}

export default useRefreshToken