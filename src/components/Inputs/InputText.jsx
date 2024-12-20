import {MagnifyingGlass} from '../../ui/svg/MagnifyingGlass';

export const Input = ({ variant, name, value, onChange, placeholder }) => {
    let inputClass = "";
    switch (variant) {
        case 'primary':
            inputClass = "input primary";
            break;
        case 'error':
            inputClass = "error";
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
        variant === "search-bar" ?
        <div className={inputClass}>
            <MagnifyingGlass></MagnifyingGlass>
            <input 
            type="text" 
            placeholder="Rechercher un produit" 
            value={value}
            onChange={onChange}
            />
        </div>
        :
        <>
            <p className="input-container">
                <label htmlFor={ name }>{ name }</label>
                <input 
                type={name == "password" ? "password" : "text"} 
                className={ inputClass }
                name={ name }
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                
                />
            </p>
        </>
    )
}