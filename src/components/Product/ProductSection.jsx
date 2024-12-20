import { CardProduct } from "./Product";
import { Button } from "../../ui/buttons/Button";


export const ProductSection = ({href, title}) => {
    const max = 4;
    let cards = () => {
        let cardArray= [];
        for (let i = 0; i < max; i++) {
            cardArray.push(
                <CardProduct key={i} img='image-test.png' title='T-SHIRT WITH TAPE DETAILS' price='50' />
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