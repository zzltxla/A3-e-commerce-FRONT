
export function ValidateIdentification (formData) {

    const error = {} || error;

    if (formData.firstName) {
        if (!formData.firstName.trim()) {
            error.firstName = "First name is required.";
        }
    }
    if (formData.lastName) {
        if (!formData.lastName.trim()) {
            error.lastName = "Last name is required.";
        }
    }
    if (formData.phone) {
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(formData.phone)) {
            error.phone = "Phone number must be 10 digits.";
        }
    }
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            error.email = "Invalid email address.";
        }
    
        const passwordRegex = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;
        if (!passwordRegex.test(formData.password)) {
            error.password = "Password must be at least 8 characters.";
        }
    


    return error;
}