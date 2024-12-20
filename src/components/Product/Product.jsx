export function CardProduct(props,key) {
    return (
        <>
        <div className="cardProduct" key={key}>
            <img src={props.img} alt="" />
            <p className="title_product">{props.title}</p>
            <p className="price_product">{props.price} &euro;</p>
        </div>
        </>
    );
}