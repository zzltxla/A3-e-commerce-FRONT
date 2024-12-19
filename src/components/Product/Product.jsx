export function CardProduct(props) {
    return (
        <>
        <div className="cardProduct">
            <img src={props.img} alt="" />
            <p className="titleProduct">{props.title}</p>
            <p className="priceProduct">{props.price} &euro;</p>
        </div>
        </>
    );
}