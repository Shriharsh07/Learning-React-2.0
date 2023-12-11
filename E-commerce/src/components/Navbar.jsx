import React from "react"
import { Link } from "react-router-dom"
import { ShoppingCart } from 'phosphor-react'

function Navbar() {
    return (
        <div className="bg-slate-400">
            <div className="flex p-4 gap-4 items-center justify-end">
                <Link to={'/'} className="font-bold font-serif">Shop</Link>
                <Link to={'/cart'}>
                    <ShoppingCart size={28} /></Link>
            </div>
        </div>
    )
}

export default Navbar