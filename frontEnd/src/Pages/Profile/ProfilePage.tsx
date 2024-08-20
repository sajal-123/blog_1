import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { setUserData, UserState } from '../../store/reducers/UserReducer';
import { MdEdit } from "react-icons/md";
import { ProfileEdit } from '../../Components/ProfileEdit';

const useTypedSelector: TypedUseSelectorHook<UserState> = useSelector;

const ProfilePage: React.FC = () => {
    const [edit, setEdit] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState(false);
    // const dispatch = useDispatch();
    const navigate = useNavigate();

    const userData = useTypedSelector(state => state.user.userInfo);

    useEffect(() => {
        if (!userData) {
            navigate('/register');
        }
    }, [userData, navigate]);
    const submitEditProfile=()=>{
        
    }

    return (
        <div className="bg-slate-200 min-h-screen w-screen flex flex-col items-center justify-center text-slate-300">
            <div id="default-modal" tabIndex={-1} aria-hidden="true" className={`${edit ? "" : "hidden"} flex transition-all overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    <ProfileEdit setEdit={setEdit}/>
                </div>
            </div>
            <div className={`bg-slate-300 flex items-center flex-col rounded-xl aspect-[6/7]`}>
                <header className={`${edit ? "opacity-30" : ""} bg-main-color text-white p-4 flex justify-center items-center`}>
                    <h1 className="text-lg font-semibold uppercase">Profile of {userData?.name || 'Guest'}</h1>
                    <div onClick={() => setEdit(!edit)} className="flex items-center space-x-4 p-2 m-2 hover:bg-gray-600 cursor-pointer bg-gray-400 rounded-full" data-modal-target="default-modal" type="button">
                        <MdEdit />
                    </div>
                </header>
                <aside className="md:w-1/3 p-5 rounded shadow">
                    <div className="text-center">
                        {isLoading ? (
                            <div className="h-44 w-44 rounded-full bg-gray-400 animate-pulse mx-auto"></div>
                        ) : (
                            <img
                                className="h-32 w-32 rounded-full mx-auto"
                                src={userData?.avatar || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxoZWFkc2hvdHxlbnwwfDB8fHwxNjk1ODE3MjEzfDA&ixlib=rb-4.0.3&q=80&w=1080"}
                                alt={`${userData?.name || 'User'}'s profile`}
                            />
                        )}
                        <h2 className="text-xl font-semibold mt-4">{userData?.name || 'Jane Doe'}</h2>
                    </div>
                </aside>

                <main className="container mx-auto my-5 p-5">
                    <div className="md:flex md:space-x-4 justify-center">
                        <section className="md:w-2/3 mt-5 md:mt-0  p-5 rounded shadow">
                            <h2 className="text-2xl font-semibold">About</h2>
                            <div className="mt-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <h3 className="text-lg font-semibold">Personal Information</h3>
                                        <ul className="mt-2 text-gray-700">
                                            <li>
                                                <span className="font-semibold">Name:</span> {userData?.name}
                                            </li>
                                            <li>
                                                <span className="font-semibold">Email:</span>{' '}
                                                <a href={`mailto:${userData?.email}`} className="text-blue-500">
                                                    {userData?.email}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">Experience</h3>
                                        <ul className="mt-2 text-gray-700">
                                            <li>
                                                <span className="font-semibold">Position:</span> Owner at Her Company Inc.
                                            </li>
                                            <li>
                                                <span className="font-semibold">Duration:</span> March 2020 - Present
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ProfilePage;
