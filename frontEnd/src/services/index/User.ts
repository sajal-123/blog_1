import axios from "axios";
import { url } from "../../constants/urls";
import { toast } from 'sonner';

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

export { SignUp, Login, forgetPassword };
