import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';

function CartItem(props) {

    const { id, productName, price, productImage } = props.data;

    const { CartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext)

    return (
        <div className="flex max-w-2xl flex-col items-center rounded-md border md:flex-row gap-3 mt-4">
            <div className="h-full w-full md:h-[200px] md:w-[300px]">
                <img
                    src={productImage}
                    className="h-full w-full rounded-md object-contain"
                />
            </div>
            <div>
                <div className="p-4">
                    <h1 className="inline-flex items-center text-lg font-semibold">
                        {productName}
                    </h1>
                    <br />
                    <h1 className="inline-flex items-center text-lg font-semibold mt-3">
                        ${price}
                    </h1>
                    <div className='gap-2 flex mt-3'>
                        <button className='outline px-2 rounded-sm font-bold' onClick={() => removeFromCart(id)}>-</button>
                        <input value={CartItems[id]} className='border-black outline rounded-sm text-center' size={4} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                        <button className='outline px-2 rounded-sm font-bold' onClick={() => addToCart(id)}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem