export function register( formData ) {
    const API_URL = `${import.meta.env.VITE_API_BASE_ENDPOINT}/register`;
    console.log(formData);
    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstname:formData.firstName,
            lastname:formData.lastName,
            email:formData.email,
            phone:formData.phone,
            password:formData.password
        }) // convert data object to JSON string
    })
        .then(response => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error("Error fetching product", error);
        });
}
