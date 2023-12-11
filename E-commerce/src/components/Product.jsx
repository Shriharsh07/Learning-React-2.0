import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

function Product(props) {

    const { id, productName, price, productImage } = props.data;

    const { addToCart, CartItems } = useContext(ShopContext)

    const cartItemAmount = CartItems[id]

    return (
        <div >
            <div>
                <div className="w-[300px] rounded-md border m-6">
                    <img
                        src={productImage}
                        className="h-[200px] w-full rounded-t-md object-contain"
                    />
                    <div className="p-4">
                        <h2 className="mt-3 text-xl text-gray-600 font-bold">
                            {productName}
                        </h2>
                        <h2 className="mt-3 text-xl text-gray-600 font-bold">
                            ${price}
                        </h2>

                        <button
                            type="button"
                            className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            onClick={() => addToCart(id)}
                        >
                            Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product