import { createContext, FC ,PropsWithChildren, useEffect, useState} from 'react';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { IContext, TypeUserState } from './auth-provider.interface';

export  const AuthContext = createContext({}as IContext)

let ignore = SplashScreen.preventAutoHideAsync()

const AuthProvider: FC<PropsWithChildren<unknown>> = ({children}) => {

    const [user,setUser] = useState<TypeUserState>(null)

    useEffect(() => {
            let mounted = true

            const checkAccessToken = async () => {
                try{

                }catch{

                }finally{
                    await SplashScreen.hideAsync()
                }
            }

            let ignore = checkAccessToken()

            return () => {
                mounted = false
            }
        },  [])

    return (
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider