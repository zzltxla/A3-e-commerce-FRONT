import { Header } from "../components/Layout";
import { Footer } from "../components/Layout";
import { FetchProductById } from "../hooks/FetchProductById";
export default ProductPage;

function ProductPage (id) {
    let product = FetchProductById(id);
    return (
        <>
            <Header title="Product"></Header>
            <div key={id} >
                <figure>
                    <img src="" alt="" />
                </figure>
                <section>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <h2>{product.price}</h2>
                    
                </section>
            </div>
            <Footer></Footer>
        </>
    )
}