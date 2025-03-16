import { IAuthFormData } from '@/app/types/auth.interface';
import { FC } from 'react';
import { Control } from 'react-hook-form';
import Field from '../../ui/field/Field';
import { validEmail } from './email.regex';

interface IAuthFields {
    controll: Control<IAuthFormData>
}
const AuthFields: FC<IAuthFields> = ({controll}) => {
    return (
        <>
            <Field<IAuthFormData> 
                placeholder='Enter email'
                control={controll}
                name='email'
                rules={{
                    required: 'Email is required',
                    pattern: {
                        value: validEmail,
                        message: 'Please enter a valid email'
                    }
                }}
                keyboardType='email-address'
            />
            <Field<IAuthFormData> 
                placeholder='Enter password'
                control={controll}
                name='password'
                secureTextEntry
                rules={{
                    required: 'Password is required',
                    minLength: {
                        value: 6,
                        message: 'Password should be minimum 6 characters long'
                    }
                }}
            />
        </>
    )
}
export default AuthFields