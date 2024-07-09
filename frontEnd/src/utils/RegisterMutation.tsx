import { useMutation } from '@tanstack/react-query';
import { SignUp } from '../services/index/User';
import { useDispatch } from 'react-redux';
import { setUserData } from '../store/reducers/UserReducer';

const useSignUpMutation = () => {
    const dispatch = useDispatch();
    return useMutation({
        mutationFn: ({ name, email, password }: { name: string, email: string, password: string }) => {
            return SignUp({ name, email, password });
        },
        onSuccess: (data) => {
            console.log('Success:', data);
            if (data && data.user) {
                dispatch(setUserData(data.user));
                localStorage.setItem('account', JSON.stringify(data.user));
            }
        },
        onError: (error) => {
            console.error('Error:', error);
        }
    });
};

export default useSignUpMutation;
