import { Input } from "../components/Inputs/InputText"
import { Button } from "../ui/buttons/Button"
import { Header } from "../components/Layout";
import { useState } from "react";
export default Register;

function Register () {
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        phone:"",
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
                        <div className="register-names">
                            <Input variant="primary"    name="first name"></Input>
                            <Input variant="primary"    name="last name"></Input>
                        </div>
                        <Input variant="primary" name="phone"></Input>
                        <Input variant="primary" name="email"></Input>
                        <Input variant="primary" name="password"></Input>

                        <a href="/login">Already have an account ? Log in </a>

                        <Button variant="black" >Register</Button>
                    </form>
                </div>
            </main>
        </>
    )
}