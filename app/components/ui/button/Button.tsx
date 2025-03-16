import { FC ,PropsWithChildren} from 'react';
import { Pressable ,Text } from 'react-native';
import { IButtonProps } from './button.interface';
import cn from 'clsx';

const Button: FC<PropsWithChildren<IButtonProps>> = ({
    children,
    className,
    ...rest}) => {
    return (
        <Pressable className={cn('self-center mt-3.5 bg-[#47AA52] w-full py-3 font-light rounded-md' , 
            className)}
        {...rest}>
            <Text className='text-white text-center font-medium text-lg'>{children}</Text>
        </Pressable>
    )
}
export default Button