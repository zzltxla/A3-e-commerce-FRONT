import { CartIcon } from '../ui/svg/CartIcon';
import { AccountIcon } from '../ui/svg/AccountIcon';
import { Input } from './Inputs/InputText';
import { useEffect, useRef, useState } from 'react';




export const Header = ({ title }) => {
    document.title = title;

    const [modal, setModal] = useState(false);
    const modalRef = useRef(null);
    const toggleModal = () => {
        setModal(!modal);
    }



    return (
        <>
            <header>
                <div className='brandName_Header'>
                    <a href="/">SHOP.CO</a>
                </div>
                <ul className='category_Header'>
                    <li><a href="/">Shop</a></li>
                    <li><a href="/">On sale</a></li>
                    <li><a href="/">New Arrivals</a></li>
                    <li><a href="/">Brands</a></li>
                </ul>
                <Input variant="search-bar" />
                <div className='icon_header'>
                    <a href="/"><CartIcon /></a>
                    <a onClick={toggleModal} href="#"><AccountIcon /></a>
                    {modal &&
                    <div ref={modalRef} className='modal'>
                        <a href="#">Mon profil</a>
                        <a href="#">Se déconnecter</a>
                        <a onClick={toggleModal} href="#">Fermer</a>
                    </div>
                }
                </div>
                
            </header>

        </>
    )
}

export const Footer = () => {
    return (
        <>
            <footer>
                <div className='h3AContain'>
                    <h3>SHOP.CO</h3>
                    <a href="">About us</a>
                    <a href="">Confidentialité</a>
                    <a href="">blablabla</a>
                </div>
                <p>© 2021 SHOP.CO. All Rights Reserved</p>
            </footer>
        </>
    )
}

