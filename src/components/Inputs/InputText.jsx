import {MagnifyingGlass} from '../../ui/svg/MagnifyingGlass';

export const Input = ({ variant, name }) => {
    let inputClass = "";
    switch (variant) {
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
        variant === "search-bar" ?
        <div className={inputClass}>
            <MagnifyingGlass/>
            <input type="text" placeholder="Rechercher un produit" />
        </div>
        :
        <>
            <p className="input-container">
                <label htmlFor={ name }>{ name }</label>
                <input type="text" className={ inputClass } name={ name } placeholder={name}/>
            </p>
        </>
    )
}