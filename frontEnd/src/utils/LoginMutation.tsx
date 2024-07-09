import { useMutation } from '@tanstack/react-query';
import { Login } from '../services/index/User';
import { useDispatch } from 'react-redux';
import { setUserData } from '../store/reducers/UserReducer';

const useLoginMutation = () => {
    const dispatch = useDispatch();
    return useMutation({
        mutationFn: ({ email, password }: { email: string, password: string }) => {
            return Login({ email, password });
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

export default useLoginMutation;
