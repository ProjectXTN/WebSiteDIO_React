import { createContext, useState } from 'react';
import { IUser } from '../types/user';
import { IAuthContext, IAuthContextProviderProps, ILoginData } from './types';
import { useNavigate } from 'react-router-dom';
import { api } from '../pages/services/api';
import { setSourceMapRange } from 'typescript';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);



export const AuthContextProvider = ({children}: IAuthContextProviderProps) => {

    const [user, setUser] = useState<IUser>({} as IUser);

    const navigate = useNavigate();

    const handleLogin = async (loginData: ILoginData) => {
        try {
            const { data } = await api.get(`users?email=${loginData.email}&password=${loginData.password}`)
            if(data.length == 1){
                setUser(data[0]);
                navigate('/feed')
            }else {
                alert('Email ou senha invalido')
            }
        } catch {
            alert('Houve um erro');
        }
    };

    const handleSingOut = () => {
        setUser({} as IUser);
        navigate('/');
    }

    return (<AuthContext.Provider value={{user, handleLogin, handleSingOut}}>
        {children}
    </AuthContext.Provider>);
}