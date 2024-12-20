import { CardProduct } from "./Product";
import { Button } from "../../ui/buttons/Button";


export const ProductSection = ({href, title, products}) => {
    let cards = () => {
        let cardArray= [];
        for (let i = 0; i < products.length; i++) {
            cardArray.push(
                <CardProduct key={i} img={products[i].imageUrl} title={products[i].name} price={products[i].price} />
            )
        }
        return cardArray;
    }

    return (
        <div className='newArrivalsContain'>
            <h2>{title}</h2>
            <div className='cardProductContain'>
                {cards()}
            </div>
            <Button  href={href} variant='white'>View All</Button>
        </div>
    )
}