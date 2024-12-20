import { useState } from "react";


export function useFormValidation(initialState, validateFn) {
    const [formData, setFormData] = useState(initialState);
    const [error, setError] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validate = () => {
        const validationErrors = validateFn(formData);
        setError(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    const resetForm = () => {
        setFormData(initialState);
        setError({});
    };

    return {
        formData,
        error,
        handleChange,
        validate,
        resetForm,
    };
}