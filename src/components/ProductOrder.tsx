import minusIcon from '../assets/img/minus.svg';
import plusIcon from '../assets/img/plus.svg';

export default function ProductOrder({ products, setProducts }) {

    const orderByPriceAsc = () => {
        const productsByPriceAsc = [...products].sort(function (a, b) {
            return b.product_price - a.product_price;
        });
        setProducts(productsByPriceAsc)
    }

    const orderByPriceDesc = () => {
        const productsByPriceDesc = [...products].sort(function (a, b) {
            return a.product_price - b.product_price;
        })
        setProducts(productsByPriceDesc)
    }

    return (
        <div className="order-products">
            <span onClick={() => orderByPriceAsc()}>
                <img src={plusIcon.src} alt="Icono más" />
            </span>
            <span onClick={() => orderByPriceDesc()}>
                <img src={minusIcon.src} alt="Icono más" />
            </span>
        </div>
    )
}
