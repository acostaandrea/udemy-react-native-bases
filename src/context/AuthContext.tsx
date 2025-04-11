import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
enum AuthStatus {
    'checking' = 'checking',
    'authenticated' = 'authenticated', 
    'unauthenticated' = 'unauthenticated'    
}

interface AuthState{
    status: AuthStatus;
    token?: string;
    user?: User;
    isChecking: boolean;
    isAuthenticated: boolean;
    isUnauthenticated: boolean;
    loginWithMailPassword: (email: string, password: string) => void;
    logout: () => void;
}
interface User{
    name: string;
    email: string;
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({children}: PropsWithChildren)=>{
    const [status, setStatus] = useState(AuthStatus.checking);
    const [user, setUser] = useState<User>();
    
    useEffect(()=>{
        setTimeout(() => {
           setStatus(AuthStatus.unauthenticated); 
        }, 1500);
    
    }, [])

    const loginWithMailPassword = (email: string, password: string) => {
        console.log(password)
        setStatus(AuthStatus.authenticated);
        setUser({name: 'Juan', email: email});
    }

    const logout = ()=>{
        setStatus(AuthStatus.unauthenticated);
        setUser(undefined);
    }

    return(
        <>
            <AuthContext.Provider value={{
                status: status,
                user: user,

                //getter
                isChecking : status === AuthStatus.checking,
                isAuthenticated : status === AuthStatus.authenticated,
                isUnauthenticated : status === AuthStatus.unauthenticated,

                //methods
                loginWithMailPassword: loginWithMailPassword,
                logout: logout,
            }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}