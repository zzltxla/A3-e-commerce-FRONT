import { Input } from "../components/Inputs/InputText"
import { Button } from "../ui/buttons/Button"
import { Header } from "../components/Layout";
import { ValidateIdentification } from "../hooks/ValidateIdentification";
import { useFormValidation } from "../hooks/FormValidation";
import { register } from "../utility/register";
import { ToastContainer, toast } from 'react-toastify';

export default Register;

function Register () {

    let notify = (message) => toast(message)

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
    } = useFormValidation(initialState, ValidateIdentification);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                register(formData);
                console.log("Form submitted successfully:", formData);
                notify("Successfully registered. Welcome !");
                resetForm();
            } catch (error) {                
                notify("Oops something went wrong.. Try again !");
                console.log("Validation errors:", error);
            }
        }
    };



    return (
        <>
        <Header title="Accueil"/>
            <main className="login-register-main">
                <div className="form-login-register">
                    <form action="register" method="post" className="flex-column" onSubmit={handleSubmit}>
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
                        <ToastContainer></ToastContainer>

                        <a href="/login">Already have an account ? Log in </a>

                        <Button variant="black" >Register</Button>
                    </form>
                </div>
            </main>
        </>
    )
}