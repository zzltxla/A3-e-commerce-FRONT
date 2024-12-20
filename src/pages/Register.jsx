import { Input } from "../components/Inputs/InputText"
import { Button } from "../ui/buttons/Button"
import { Header } from "../components/Layout";
import { ValidateRegister } from "../hooks/ValidateRegister";
import { useFormValidation } from "../hooks/FormValidation";
import clsx from "clsx";


export default Register;

function Register () {

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
                        <div className="register-names">
                            <div>
                                <Input variant={ !error.firstName ? "primary" : "error" }
                                name="firstName"
                                placeholder="first name"
                                value={formData.firstName}
                                onChange={handleChange}
                                ></Input>
                                {error.firstName && <small>{error.firstName}</small>}
                            </div>
                            {/* --------------- */}
                            <div>
                                <Input variant={ !error.firstName ? "primary" : "error" }
                                name="lastName"
                                placeholder="last name"
                                value={formData.lastName}
                                onChange={handleChange}
                                ></Input>
                                {error.lastName && <small>{error.phone}</small>}
                            </div>
                        </div>
                        {/* ------------- */}
                        <div>
                            <Input variant={ !error.firstName ? "primary" : "error" }
                            name="phone"
                            placeholder="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            ></Input>
                            {error.phone && <small>{error.phone}</small>}
                        </div>
                        {/* ------------- */}
                        <div>
                            <Input variant={ !error.firstName ? "primary" : "error" }
                            name="email"
                            placeholder="email"
                            value={formData.email}
                            onChange={handleChange}
                            ></Input>
                            {error.email && <small>{error.email}</small>}
                        </div>
                        {/* ----------- */}
                        <div>
                            <Input variant={ !error.firstName ? "primary" : "error" }
                            name="password"
                            placeholder="password"
                            value={formData.password}
                            onChange={handleChange}
                            
                            ></Input>
                            {error.password && <small className="error">{error.password}</small>}
                        </div>


                        <a href="/login">Already have an account ? Log in </a>

                        <Button variant="black" >Register</Button>
                    </form>
                </div>
            </main>
        </>
    )
}