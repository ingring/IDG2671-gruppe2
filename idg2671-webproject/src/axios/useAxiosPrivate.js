import { axiosPrivate } from "./axios";
import { useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshtoken";
import useAuth from "../hooks/useAuth";

const useAxiosPrivate = () => {
    const refresh = useRefreshToken()
    const { auth } = useAuth()

    useEffect(() =>{

        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if(!config.headers['Authorization']){
                    config.headers['Authorization'] = `Bearer ${auth?.accesstoken}`
                }
                return config
            }, (err) => Promise.reject(err)
        )

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response, 
            async (error) => {
                const prevRequest = error?.config
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true
                    const newAccesstoken = await refresh()
                    prevRequest.headers['Authorization'] = `Bearer ${newAccesstoken}`
                    return axiosPrivate(prevRequest)
                }
                return Promise.reject(error)
            }
        )

        return () => {
            axiosPrivate.interceptors.response.eject(responseIntercept)
            axiosPrivate.interceptors.request.eject(requestIntercept)
        }


    },[auth,refresh])


    return axiosPrivate
}

export default useAxiosPrivate