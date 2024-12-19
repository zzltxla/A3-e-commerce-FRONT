export const Input = ({ props, name }) => {
    let inputClass = "";
    switch (props.variant) {
        case 'primary':
            inputClass = "input primary";
            break;
        case 'error':
            inputClass = "input error";
            break;
        case 'valid':
            inputClass = "input valid";
            break;
        case 'search-bar':
            inputClass = "input search-bar";
            break;

        default:
            inputClass = "input";
    }
    return (
        <>
            <p className="input-container">
                <label htmlFor={ name }>{ name }</label>
                <input type="text" className={ inputClass } name={ name } placeholder={name}/>
            </p>
        </>
    )
}