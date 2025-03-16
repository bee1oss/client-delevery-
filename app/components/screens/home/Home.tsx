import { View, Text, Pressable} from 'react-native';
import {FC} from 'react';
import { useTypedNavigation } from '@/app/hooks/useTypedNavigation';

const Home: FC = () => {
    const { navigate } = useTypedNavigation()
    return (
        <View>
            <Text>Hom</Text>
            <Pressable onPress={()=>navigate('Auth')}>
                <Text className="text-red-600 text-base font-semibold ml-2">Auth</Text>
            </Pressable>
        </View>
    )
}
export default Home