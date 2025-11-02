import axios from 'axios';

// Types
interface User {
    id: number;
    name: string;
    email: string;
}

interface LoginForm {
    email: string;
    password: string;
}

// Mock data
const DEMO_USER: User = {
    id: 1,
    name: "John Doe",
    email: "demo@test.com"
};

const TOKEN = "demo-token-123";

export const AuthApi = {
    login: async (loginForm: LoginForm) => {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', loginForm);
        console.log(response);
        
        
        if (loginForm.email && loginForm.password) {
            localStorage.setItem('authToken', TOKEN);
            localStorage.setItem('user', JSON.stringify(DEMO_USER));
            
            return {
                user: DEMO_USER,
                token: TOKEN
            };
        }
        
        throw new Error("Email et mot de passe requis");
    },

    verifyToken: async (token: string) => {
        await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        
        if (token === TOKEN) {
            return DEMO_USER;
        }
        
        throw new Error("Token invalide");
    },

    logout: async () => {
        await axios.delete('https://jsonplaceholder.typicode.com/posts/1');
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        return { success: true };
    },

    getStoredToken: () => {
        return localStorage.getItem('authToken');
    },

    getStoredUser: () => {
        const userStr = localStorage.getItem('user');
        return userStr ? JSON.parse(userStr) : null;
    },

    clearStorage: () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
    }
};
