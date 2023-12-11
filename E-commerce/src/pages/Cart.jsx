import React, { useContext } from 'react'
import PRODUCTS from '../Product'
import { ShopContext } from '../context/ShopContext'
import CartItem from '../components/CartItem'
import { useNavigate } from 'react-router-dom'

function Cart() {

    const { CartItems, getTotalCartAmount } = useContext(ShopContext)

    const totalAmount = getTotalCartAmount()

    const navigate = useNavigate()
    return (
        <div>
            <div className='m-5 text-3xl font-extrabold'>My Cart</div>
            <div className='grid grid-cols-4 gap-10'>
                <div className='m-5 col-span-3'>
                    {PRODUCTS.map((product) => {
                        if (CartItems[product.id] !== 0) {
                            return <CartItem data={product} />
                        }
                    })}
                </div>
                {totalAmount > 0 ?
                    <div className='m-5'>
                        <h1 className='text-xl font-semibold m-5'>Total: ${totalAmount}</h1>

                        <button className='"mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  focus-visible:outline-black'
                            onClick={() => navigate('/')}
                        >Continue Shopping</button><br /><br />
                        <button className='"mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'>Checkout</button>
                    </div> : <h1 className='text-2xl font-semibold'>Your Cart is Empty</h1>
                }
            </div>

        </div>
    )
}

export default Cart