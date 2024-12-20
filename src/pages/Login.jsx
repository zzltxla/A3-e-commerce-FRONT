import { Input } from "../components/Inputs/InputText"
import { Button } from "../ui/buttons/Button"
import { Header } from "../components/Layout";
import { useState } from "react";
import { useFormValidation } from "../hooks/FormValidation";
import { ValidateRegister } from "../hooks/ValidateRegister";

export default Login;

function Login () {
    const initialState = {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
    }

    const {
        formData,
        error,
        handleChange,
        validate,
        resetForm,
    } = useFormValidation(initialState, ValidateRegister);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Form submitted successfully:", formData);
            resetForm();
        } else {
            console.log("Validation errors:", error);
        }
    };

    return (
        <>
        <Header title="Accueil"/>
            <main className="login-register-main">
                <div className="form-login-register">
                    <form action="login" method="post" className="flex-column" onSubmit={handleSubmit}>
                        <div>
                            <Input variant={!error.email ? "primary" : "error"} 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="email"
                            ></Input>
                            {error.email && <small>{error.email}</small>}
                        </div>
                        <div>
                            <Input variant={!error.email ? "primary" : "error"} 
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="password"
                            >
                            </Input>
                            {error.password && <small>{error.password}</small>}
                        </div>

                        <a href="/register">Don&apos;t have an account yet ? Create one </a>
                        
                        <Button variant="black" >Log In</Button>
                    </form>
                </div>
            </main>
        </>
    );
}