import { createContext, useEffect, useState, type ReactNode } from "react";
import { AuthApi } from "../api/demoAuthApi";

interface User {
    id: number;
    name: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export { AuthContext };

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const token = AuthApi.getStoredToken();
            if (token) {
                try {
                    const userData = await AuthApi.verifyToken(token);
                    setUser(userData);
                } catch {
                    AuthApi.clearStorage();
                }
            }
            setLoading(false);
        };
        checkAuth();
    }, []);

    const login = async (email: string, password: string) => {
        const response = await AuthApi.login({ email, password });
        setUser(response.user);
    };

    const logout = () => {
        AuthApi.logout();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated: !!user,
            login,
            logout,
            loading
        }}>
            {children}
        </AuthContext.Provider>
    );
};
