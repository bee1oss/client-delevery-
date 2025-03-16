import { View, Text, ActivityIndicator} from 'react-native';
import {FC} from 'react';

const Loader : FC = () => {
    return (
        <ActivityIndicator size='large' color={'#47aa52 '} />
    )
}
export default Loader