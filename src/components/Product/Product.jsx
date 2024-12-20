export function CardProduct(props,key) {
    return (
        <>
        <div className="cardProduct" key={key}>
            <img src={props.img} alt="" />
            <p className="titleProduct">{props.title}</p>
            <p className="priceProduct">{props.price} &euro;</p>
        </div>
        </>
    );
}