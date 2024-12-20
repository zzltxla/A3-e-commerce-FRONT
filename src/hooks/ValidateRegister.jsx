export function ValidateRegister (formData) {

    const error = {} || error;

    if (!formData.firstName.trim()) {
        error.firstName = "First name is required.";
    }

    if (!formData.lastName.trim()) {
        error.lastName = "Last name is required.";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
        error.phone = "Phone number must be 10 digits.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        error.email = "Invalid email address.";
    }

    if (formData.password.length < 8) {
        error.password = "Password must be at least 8 characters.";
    }

    return error;
}