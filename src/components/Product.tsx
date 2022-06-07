export default function Product({ name, price, discount, colors, image, currency }) {


    const priceDiscounted = (price - (price * (discount / 100))).toFixed(2);


    return (
        <div className="product">
            <img className="product__image" src={image} alt={`Imagen del producto: ${name}`} />
            <h3 className="product__title">{name}</h3>
            <div className="product__prices">
                <p className={discount !== null ? "product__price crossed" : "product__price"}>{price} {currency}</p>
                {discount !== null ? <span className="product__price-discounted">{priceDiscounted} {currency}<span className="product__discount-percentage">{`(-${discount}%)`}</span></span> : ''}
                <div className="product__variant">
                    {colors.length !== 0 ? <p className="color-select">más colores</p> : ''}
                </div>
            </div>
            <button className="product__add-button">Añadir</button>
        </div>
    )
}

