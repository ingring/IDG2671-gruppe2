import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [user, setUser] = useState('');
    const [accesstoken, setAccesstoken] = useState('')
    const [persist, setPersist] = useState(JSON.parse(localStorage.getItem("persist")) || false);
    const [toolId, setToolId] = useState('');

    return (
        <AuthContext.Provider value={{ auth, setAuth, setUser, user, accesstoken, setAccesstoken, persist, setPersist, toolId, setToolId }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;