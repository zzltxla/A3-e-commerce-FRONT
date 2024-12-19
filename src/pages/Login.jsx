import { Input } from "../components/Inputs/InputText"
import { Button } from "../ui/buttons/Button"
import { Header } from "../components/Layout";
import { useState } from "react";

export default Login;

function Login () {
    const [formData, setFormData] = useState({
        email:"",
        password:"",
    })
    const [error, setError] = useState({});
    
    return (
        <>
        <Header title="Accueil"/>
            <main className="login-register-main">
                <div className="form-login-register">
                    <form action="login" method="post" className="flex-column">
                        <Input variant="primary" name="email"></Input>
                        <Input variant="primary" name="password"></Input>
                        <a href="/register">Don&apos;t have an account yet ? Create one </a>
                        <Button variant="black" >Log In</Button>
                    </form>
                </div>
            </main>
        </>
    );
}