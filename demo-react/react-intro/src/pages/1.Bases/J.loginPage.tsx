import { useAuth } from "../../contexts/useAuth";

function LoginPage(){

    const { login } = useAuth();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        login(email, password);
    };

    return (
        <>
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
        </>
    )
}

export default LoginPage;