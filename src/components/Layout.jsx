import { CartIcon } from '../ui/svg/CartIcon';
import { AccountIcon } from '../ui/svg/AccountIcon';
import { Input } from './Inputs/InputText';

export const Header = ({ title }) => {
    document.title = title;
    return (
        <>
            <header>
                <div className='brandName_Header'>
                    <a href="#">SHOP.CO</a>
                </div>
                <ul className='category_Header'>
                    <li><a href="#">Shop</a></li>
                    <li><a href="">On sale</a></li>
                    <li><a href="#">New Arrivals</a></li>
                    <li><a href="#">Brands</a></li>
                </ul>
                <Input variant="search-bar"></Input>
                <div className='icon_header'>
                    <a href="#"><CartIcon /></a>
                    <a href="#"><AccountIcon /></a>
                </div>
            </header>
        </>
    )
}

