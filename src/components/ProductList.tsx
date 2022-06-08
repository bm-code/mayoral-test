import * as data from '../assets/products.json';
import { useState } from 'react';
import Product from './Product';
import ProductOrder from './ProductOrder';
import Search from './Search';

export default function ProductList() {

    type Data = typeof data.results;
    const initialState = data.results;
    const [products, setProducts] = useState<Data>(initialState);

    // Buscador
    const [term, setTerm] = useState('');
    const searchingTerm = (term: string) => {
        return function (name: any) {
            return name.product_name.toLowerCase().includes(term) || !term;
        }
    }

    return (
        <main>
            <header>
                <Search term={term} setTerm={setTerm} />
                <ProductOrder products={products} setProducts={setProducts} />
            </header>
            <div className="product__list">
                {
                    products.filter(searchingTerm(term)).map(product => {
                        return <Product
                            key={product.product_id}
                            name={product.product_name}
                            price={product.product_price}
                            discount={product.discount_percentage}
                            colors={product.product_colors}
                            image={product.product_img_url}
                            currency={product.currency} />
                    })
                }
            </div>
        </main>
    )
}