import { View, Text, Pressable} from 'react-native';
import {FC} from 'react';
import { TypeRootStackParamList } from '@/app/navigation/navigation.types';
import { useTypedNavigation } from '@/app/hooks/useTypedNavigation';

const Auth: FC = () => {
    const { navigate } = useTypedNavigation()
    return (
        <View>
            <Text>Auth</Text>
            <Pressable onPress={()=>navigate('Home')}>
                <Text className="text-red-600 text-base font-semibold ml-2">Go To Home</Text>
            </Pressable>
        </View>
    )
}
export default Auth