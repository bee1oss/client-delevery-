import { View, Text, Pressable} from 'react-native';
import {FC, useState} from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IAuthFormData } from '@/app/types/auth.interface';
import Loader from '../../ui/Loader';

const Auth: FC = () => {
    const [isReg, setIsReg] = useState(false);

    const {handleSubmit,reset,control} = useForm<IAuthFormData>({//its work when user user write nonvalid data
        mode: 'onChange',//form icine yazi yazerken aninda hata mesaji verir
    })

    const onSubmit:SubmitHandler<IAuthFormData> = data =>{
        console.log(data);
    }

    const isLoading = false

    return (
        <View className='mx-2 items-center justify-center h-full'>
            <View className='w-9/12'>
                <Text className='text-center text-black text-3xl font-medium mb-8'>
                    {isReg ? 'Register' : 'Login'}
                </Text>
                {isLoading ? (
                    <Loader />
                ):(
                    <>

                    </>
                )}
            </View>
        </View>//burada biraz classlarla alakali biraz arastirma yapip ogrenmem lazim
    )
}
export default Auth