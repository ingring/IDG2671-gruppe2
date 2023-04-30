import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [user, setUser] = useState('');
    const [accesstoken, setAccesstoken] = useState('')
    const [persist, setPersist] = useState(JSON.parse(localStorage.getItem("persist")) || false);
    const [toolId, setToolId] = useState('');
    const [toolName, setToolName] = useState('');

    return (
        <AuthContext.Provider value={{ 
            auth, setAuth, 
            user, setUser,
            accesstoken, setAccesstoken, 
            persist, setPersist, 
            toolId, setToolId, 
            toolName, setToolName 
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;