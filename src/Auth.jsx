import { createContext } from "react";
import { useState } from "react";
export const AuthContext = createContext();



function Auth({ children }) {
    const [authdetails, setAuthdetails] = useState({ isloggedIn: false, token: " " });

    const login = (token) => {
        setAuthdetails({
            isloggedIn: true,
            token: token,
        })
    }
    const logout = () => {
        setAuthdetails({
            isloggedIn: false,
            token: " ",
        })
    }


    const value1 = {
        ...authdetails,
        login,
        logout,
    }

    return (
        <>
            <AuthContext.Provider value={value1} >
                {children}
            </AuthContext.Provider>
        </>
    )
}

export default Auth


