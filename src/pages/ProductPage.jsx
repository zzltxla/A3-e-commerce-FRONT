import { Header } from "../components/Layout";
import { Footer } from "../components/Layout";
import { FetchProductById } from "../hooks/FetchProductById";
export default ProductPage;

function ProductPage (id) {
    return (
        <>
            <Header title="Product"></Header>
            <div key={id}>
                <figure>
                    <img src="" alt="" />
                </figure>
                <section>
                    <h1></h1>
                    <p></p>
                    <h2></h2>
                    
                </section>
            </div>
            <Footer></Footer>
        </>
    )
}