import { useEffect, useState } from 'react';
import { Header } from '../components/Layout';
import { Footer } from '../components/Layout';
import { ProductSection }  from '../components/Product/ProductSection';
import { FetchProduct } from '../hooks/FetchProduct';

function Homepage() {

    const [getProduct, setProduct] = useState();

    (async () => {
        setProduct(await FetchProduct({path:'/product'}));
    })()

    if(!getProduct) return <p>chargement</p>
    
    

    return (
        <>
            <Header title='Accueil' />
            <main>
                <div className='topSellingContain' >
                    <ProductSection 
                    products={getProduct}
                    href="/login"
                    title="Top Selling"
                    ></ProductSection>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Homepage;