import { useMutation } from '@tanstack/react-query';
import { reserPassword } from '../services/index/User';
import { useDispatch } from 'react-redux';
import { setUserData } from '../store/reducers/UserReducer';

const useResetMutation = () => {
    const dispatch = useDispatch();
    return useMutation({
        mutationFn: ({ password,token='' }: { password: string,token:string }) => {
            return reserPassword({password,token} );
        },
        onSuccess: (data) => {
            console.log('Success:', data);
            if (data && data.user) {
                dispatch(setUserData(data.user));
            }
        },
        onError: (error) => {
            console.error('Error:', error);
        }
    });
};

export default useResetMutation;
