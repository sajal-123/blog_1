import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store';

const ProfilePage: React.FC = () => {
    const navigate = useNavigate();
    const userData = useSelector((state: RootState) => state.user);

    useEffect(() => {
        if (!userData.userInfo) {
            navigate('/');
        }
    }, [navigate, userData.userInfo]);

    return (
        <div className="bg-dark-hard min-h-screen w-screen text-slate-300">
            <header className="bg-main-color text-white p-4 flex justify-between items-center">
                <h1 className="text-lg font-semibold uppercase">Example Profile</h1>
                <div className="flex items-center space-x-4">
                    <span>{userData.userInfo?.name || 'Guest'}</span>
                    {userData.userInfo?.avatar && (
                        <img
                            className="h-8 w-8 rounded-full"
                            src={userData.userInfo.avatar}
                            alt={`${userData.userInfo.name}'s avatar`}
                        />
                    )}
                </div>
            </header>

            <main className="container mx-auto my-5 p-5">
                <div className="md:flex md:space-x-4">
                    {/* Sidebar */}
                    <aside className="md:w-1/3 bg-white p-5 rounded shadow">
                        <div className="text-center">
                            <img
                                className="h-32 w-32 rounded-full mx-auto"
                                src={userData.userInfo?.avatar || 'https://via.placeholder.com/150'}
                                alt={`${userData.userInfo?.name}'s profile`}
                            />
                            <h2 className="text-xl font-semibold mt-4">{userData.userInfo?.name || 'Jane Doe'}</h2>
                            <p className="text-gray-600">Owner at Her Company Inc.</p>
                        </div>
                        <div className="mt-5">
                            <h3 className="text-lg font-semibold">Similar Profiles</h3>
                            <ul className="mt-3 space-y-2">
                                {/* Map through similar profiles */}
                                {[1, 2, 3].map((profile) => (
                                    <li key={profile} className="flex items-center space-x-3">
                                        <img
                                            className="h-10 w-10 rounded-full"
                                            src="https://via.placeholder.com/100"
                                            alt="Similar profile avatar"
                                        />
                                        <span>Profile Name</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <section className="md:w-2/3 mt-5 md:mt-0 bg-white p-5 rounded shadow">
                        <h2 className="text-2xl font-semibold">About</h2>
                        <div className="mt-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <h3 className="text-lg font-semibold">Personal Information</h3>
                                    <ul className="mt-2 text-gray-700">
                                        <li>
                                            <span className="font-semibold">First Name:</span> Jane
                                        </li>
                                        <li>
                                            <span className="font-semibold">Last Name:</span> Doe
                                        </li>
                                        <li>
                                            <span className="font-semibold">Email:</span>{' '}
                                            <a href="mailto:jane.doe@example.com" className="text-blue-500">
                                                jane.doe@example.com
                                            </a>
                                        </li>
                                        <li>
                                            <span className="font-semibold">Phone:</span> +11 998001001
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
    );
};

export default ProfilePage;
