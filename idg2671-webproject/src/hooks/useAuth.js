import { useContext, useDebugValue } from "react"
import AuthContext from "../context/AuthProvider"

const useAuth = () => {

    const { auth } = useContext(AuthContext)
    useDebugValue(auth, auth => auth?.player ? "logged in" : "logged out")
    return useContext(AuthContext)

}

export default useAuth