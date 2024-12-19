import {CartIcon} from '../ui/svg/CartIcon';
import {AccountIcon} from '../ui/svg/AccountIcon';

export const Header = ({title}) => {
    document.title = title;
    return (
        <>
        <header>
            <ul>
                <li><a href="#">SHOP.CO</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="">On sale</a></li>
                <li><a href="#">New Arrivals</a></li>
                <li><a href="#">Brands</a></li>
                <li><input type="text" placeholder="Rechercher un produit"/></li>
                <li><a href="#"> <CartIcon/> </a></li>
                <li><a href="#"><AccountIcon/></a></li>
            </ul>
        </header>
        </>
    )
}

