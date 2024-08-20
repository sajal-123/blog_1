import React, { useState } from 'react';
import { MdCancel } from "react-icons/md";
function ProfileEdit({setEdit}:{setEdit:any}) {
    const [selectedImage, setSelectedImage] = useState("");

    const handleImageChange = (e:any) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        // Handle form submission here (e.g., send data to the server)
    };

    return (
        <div>
            <div className="max-w-xl py-6 px-8 h-auto mt-20 bg-white rounded shadow-xl">
                <button className='absolute right-28 top-32' onClick={()=>setEdit(false)}>
                <MdCancel className='text-dark-soft h-8 w-8 cursor-pointer hover:text-dark-light'/>
                </button>
                <form onSubmit={handleSubmit}>
                    {/* Image Upload Section */}
                    <div className="mb-6 flex flex-col items-center">
                        <div className="relative w-32 h-32 bg-gray-200 rounded-full overflow-hidden">
                            {selectedImage ? (
                                <img src={selectedImage} alt="Profile Preview" className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                            )}
                        </div>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="mt-4"
                        />
                    </div>

                    {/* Name Field */}
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-gray-800 font-bold">Name:</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="username"
                            className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600"
                        />
                    </div>

                    {/* Email Field */}
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-800 font-bold">Email:</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="@email"
                            className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600"
                        />
                        <a href="#" className="text-sm font-thin text-gray-800 hover:underline mt-2 inline-block hover:text-indigo-600">Forget Password</a>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
}

export { ProfileEdit };
