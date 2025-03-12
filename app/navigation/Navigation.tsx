import {FC} from 'react';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TypeRootStackParamList } from './navigation.types';
import { routes } from './routes';

const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const Navigation: FC = () => {
    return (
        <NavigationIndependentTree>
            <Stack.Navigator 
            screenOptions={{
                headerShown: false,
                contentStyle: {backgroundColor: '#fff'}
                }}>
                {
                    routes.map((route) => (
                        <Stack.Screen key={route.name}
                        {...route}
                        />
                    ))
                }
            </Stack.Navigator>
        </NavigationIndependentTree>
    )
}
export default Navigation