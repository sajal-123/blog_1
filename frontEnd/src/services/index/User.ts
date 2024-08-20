import axios from "axios";
import { url } from "../../constants/urls";
import { toast } from 'sonner';
import { string } from "zod";

// Define the types for the function parameters
interface SignUpParams {
    name: string;
    email: string;
    password: string;
}
interface LoginParams {
    email: string;
    password: string;
}

const SignUp = async ({ name, email, password }: SignUpParams) => {
    try {
        axios.defaults.withCredentials = true;
        const response = await axios.post(`${url}/api/users/signup`, {
            name,
            email,
            password,
        });
        toast.success("Registration successful!");
        return response.data;
    } catch (error: any) {
        if (error.response && error.response.data.message) {
            toast.error(error.response.data.message);
            throw new Error(error.response.data.message);
        }
        toast.error(error.message);
        throw new Error(error.message);
    }
};
const Login = async ({ email, password }: LoginParams) => {
    try {
        axios.defaults.withCredentials = true;
        const response = await axios.post(`${url}/api/users/login`, {
            email,
            password,
        });
        toast.success("Login successfull!");
        return response.data;
    } catch (error: any) {
        if (error.response && error.response.data.message) {
            toast.error(error.response.data.message);
            throw new Error(error.response.data.message);
        }
        toast.error(error.message);
        throw new Error(error.message);
    }
};
const forgetPassword = async (email: string) => {
    try {
        axios.defaults.withCredentials = true;
        const response = await axios.post(`${url}/api/users/forgetPassword`, {
            email,
        });
        toast.success(response.data.message);
        return response.data;
    } catch (error: any) {
        if (error.response && error.response.data.message) {
            toast.error(error.response.data.message);
            throw new Error(error.response.data.message);
        }
        toast.error(error.message);
        throw new Error(error.message);
    }
};
const reserPassword = async ({ password, token }: { password: string, token: string }) => {
    try {
        axios.defaults.withCredentials = true;
        const response = await axios.post(`${url}/api/users/resetPassword`, {
            password,
            token
        });
        toast.success(response.data.message);
        return response.data;
    } catch (error: any) {
        if (error.response && error.response.data.message) {
            toast.error(error.response.data.message);
            throw new Error(error.response.data.message);
        }
        toast.error(error.message);
        throw new Error(error.message);
    }
};

const getUserProfile = async () => {

    try {
        console.log(`${url}/api/users/profile`)
        const response = await axios.get(`${url}/api/users/profile`,{ withCredentials: true });
        console.log(response)
        return response.data; // Assuming the API returns the user profile data in the response body
    } catch (error: any) {
        // Error handling
        if (error.response) {
            // The request was made and the server responded with a status code that falls out of the range of 2xx
            console.error('Error response:', error.response.data);
            throw new Error(error.response.data.message || 'Failed to fetch user profile');
        } else if (error.request) {
            // The request was made but no response was received
            console.error('Error request:', error.request);
            throw new Error('No response received from server');
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error message:', error.message);
            throw new Error('Error in setting up request');
        }
    }
};

const updateProfilePicture = async () => {

}

export { SignUp, Login, forgetPassword, reserPassword, updateProfilePicture, getUserProfile };
