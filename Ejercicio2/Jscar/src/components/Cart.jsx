import './Cart.css'
import { useId } from "react";
import { ClearCartIcon, RemoveFromCartIcon, CartIcon} from "./iconos";
import { useCart } from '../hooks/useCart';
import { Productos } from './Productos';

function CartItem({thumbnail, price, title, quantity, addToCart}){
    return(
        <>
            <li>
                <img 
                    src={thumbnail} 
                    alt={title}
                />
                <div>
                    <strong>{title}</strong> - ${price}
                </div>
                <footer>
                    <small >
                        Qty: {quantity}
                    </small>
                    <button onClick={addToCart}>+</button>
                </footer>
            </li>   
        </>
    )
}

export function Cart(){
    const cartCheckboxId=useId();
    const {cart, clearCart,addToCart }=useCart();
    const subtotal=0
    const total= cart.map(product=>Number(product.price)*Number(product.quantity))
    return(
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon/>
            </label>
            <input type="checkbox" id={cartCheckboxId} hidden />

            <aside className="cart">
                <ul>
                   {cart.map(product=>
                        <CartItem 
                        key={product.id}
                        addToCart={()=> addToCart(product)} 
                        {...product}/>
                    )}
                </ul>
                <p>
                    Total: ${total}
                </p>
                <button onClick={clearCart}>
                    <ClearCartIcon/>
                </button>
            </aside>
        </>
    )
}