import './Cart.css'
import { CartIcon, ClearCartIcon } from '../icons'
import { useId } from 'react'
export default function Cart() {
    const cartCheckboxId = useId()
    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input className='check' id={cartCheckboxId} type="checkbox" hidden />

            <aside className='cart'>
                <ul>
                    <li>
                        <img src="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp" alt="imbagen" />
                    </li>
                    <div>
                        <strong>Iphone</strong> - $3445
                    </div>
                    <footer>
                        <small>Qty:1</small>
                        <button>+</button>
                    </footer>

                </ul>
                <button><ClearCartIcon/></button>
            </aside>
        </>
    )
}