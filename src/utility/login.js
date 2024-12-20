export function login( formData ) {
    const API_URL = `${import.meta.env.VITE_API_BASE_ENDPOINT}/login`;
    console.log(formData);
    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email:formData.email,
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
