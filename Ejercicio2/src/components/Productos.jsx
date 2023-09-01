import { useCart } from '../hooks/useCart.jsx';
import './Productos.css';
import { AddToCartIcon, RemoveFromCartIcon } from "./iconos.jsx";

export function Productos ({products}){
    const {addToCart, cart, removeFromCart}= useCart()

    const checkProductInCart=product=>{
        return cart.some(item => item.id == product.id);
    }
    return(
        <main className='products'>
            <ul>
                {products.map(product=> {
                    const isProductIncart= checkProductInCart(product)
                    return(
                    <li key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />
                        <div>
                            <strong>{product.title}</strong>-${product.price}
                        </div>
                        <div>
                            <button   onClick={()=>isProductIncart? removeFromCart(product):addToCart(product)}>
                                {
                                    isProductIncart
                                    ? <RemoveFromCartIcon/>
                                    :<AddToCartIcon/>
                                }
                            </button>
                        </div>
                    </li>
                   
                )})}
            </ul>
        </main>
    )
}