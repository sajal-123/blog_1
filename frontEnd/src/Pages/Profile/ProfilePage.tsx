import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/index';// Adjust the import path as needed

const ProfilePage: React.FC = () => {
    const userData = useSelector((state: RootState) => state.user);

    return (
        <div className='bg-dark-hard h-full w-screen text-slate-300'>
            {userData.userInfo?.name ? userData.userInfo.name : 'No user data available'}
            hello
        </div>
    );
};

export default ProfilePage;
