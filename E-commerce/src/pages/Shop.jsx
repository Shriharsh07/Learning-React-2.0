import React from 'react'
import Product from '../components/Product'
import PRODUCTS from '../Product'

function Shop() {
    return (
        <div>
            <div>
                <h1 className='text-3xl text-center font-extrabold mt-3'>
                    Welcome to the Shop</h1>
            </div>
            <div className='grid grid-cols-3'>
                {PRODUCTS.map((product) => (
                    <Product data={product} />
                ))}
            </div>
        </div>
    )
}

export default Shop