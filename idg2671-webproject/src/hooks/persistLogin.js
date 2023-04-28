import { Outlet } from "react-router-dom"
import { useState, useEffect} from "react"
import useRefreshToken from "./useRefreshtoken"
import useAuth from "./useAuth"


//this makes login persist
const PersistLogin = () => {
    const [isLoading, setisLoading] = useState(true)
    const refresh = useRefreshToken()
    const { auth } = useAuth()

    
    useEffect(() =>{
        //try to get new accesstoken
        const verifyRefreshToken = async () => {
            try{
                await refresh()
            }catch(err){
                console.error(err)
            }
            finally {
                setisLoading(false)
            }
        }
        //if there is no accesstoken - try to get new accesstoken 
        //from the API using refreshtoken
        //ELSE set isloading false
        !auth?.accessToken ? verifyRefreshToken() : setisLoading(false)

    },[])

    useEffect(() => {
        console.log(`isLoading: ${isLoading}`)
        console.log(`aT: ${JSON.stringify(auth?.accessToken)}`)
    },[isLoading])

    return (
        <>
            {isLoading
                ? <p> Loading...</p>
                : <Outlet />
            }
        </>
    )
}

export default PersistLogin
