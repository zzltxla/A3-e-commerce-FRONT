export function CardProduct(props) {
    return (
        <>
        <div className="cardProduct">
            <img src={props.img} alt="" />
            <p className="title_product">{props.title}</p>
            <p className="price_product">{props.price} &euro;</p>
        </div>
        </>
    );
}