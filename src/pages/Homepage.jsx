import { Header } from '../components/Layout';
import { Footer } from '../components/Layout';
import { ProductSection }  from '../components/Product/ProductSection'


function Homepage() {
    return (
        <>
            <Header title='Accueil' />
            <main>
                <div className='topSellingContain'>
                    <ProductSection
                    href="/login"
                    title="Top Selling"
                    ></ProductSection>
                    <ProductSection
                    href="/login"
                    title="Latest"
                    ></ProductSection>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Homepage;