import { Header } from '../components/Layout';
import { Footer } from '../components/Layout';
import { CardProduct } from '../components/Product/Product';
import { Button } from '../ui/buttons/Button';


function Homepage() {
    return (
        <>
            <Header title='Accueil' />
            <main>
                <div className='newArrivalsContain'>
                    <h2>New arrivals</h2>
                    <div className='cardProductContain'>
                        <CardProduct img='image-test.png' title='T-SHIRT WITH TAPE DETAILS' price='50' />
                        <CardProduct img='image-test.png' title='T-SHIRT WITH TAPE DETAILS' price='50' />
                        <CardProduct img='image-test.png' title='T-SHIRT WITH TAPE DETAILS' price='50' />
                        <CardProduct img='image-test.png' title='T-SHIRT WITH TAPE DETAILS' price='50' />
                    </div>
                    <Button variant='white'>View All</Button>
                </div>

                <div className='topSellingContain' >
                    <h2>Top selling</h2>
                    <div className='cardProductContain'>
                        <CardProduct img='image-test.png' title='T-SHIRT WITH TAPE DETAILS' price='50' />
                        <CardProduct img='image-test.png' title='T-SHIRT WITH TAPE DETAILS' price='50' />
                        <CardProduct img='image-test.png' title='T-SHIRT WITH TAPE DETAILS' price='50' />
                        <CardProduct img='image-test.png' title='T-SHIRT WITH TAPE DETAILS' price='50' />
                    </div>
                    <Button variant='white'>View All</Button>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Homepage;