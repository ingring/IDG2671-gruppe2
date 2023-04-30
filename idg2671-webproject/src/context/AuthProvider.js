import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [user, setUser] = useState('');
    const [accesstoken, setAccesstoken] = useState('')
    const [persist, setPersist] = useState(JSON.parse(localStorage.getItem("persist")) || false);
    const [tool, setTool] = useState('');

    return (
        <AuthContext.Provider value={{ auth, setAuth, setUser, user, accesstoken, setAccesstoken, persist, setPersist, tool, setTool }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;