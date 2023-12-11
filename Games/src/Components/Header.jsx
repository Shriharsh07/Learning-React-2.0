import React, { useContext, useEffect, useState } from 'react'
import logo from '../assets/Images/logo.jpg'
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoMoon } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";
import { ThemeContext } from '../Context/ThemeContext'

function Header() {

    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        console.log(theme);
    }, [])

    return (
        <div className='flex items-center p-3'>
            <img src={logo} width={60} height={60} className='mx-1 my-2 rounded-full' />
            <div className='flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full'>
                <HiMagnifyingGlass />
                <input type="text" placeholder='Search Games' className='px-2 bg-transparent outline-none' />
            </div>
            <div>
                {theme == 'light' ? <IoMoon
                    className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer'
                    onClick={() => { setTheme('dark'); localStorage.setItem('theme', 'dark') }}
                /> : <IoIosSunny
                    className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer'
                    onClick={() => { setTheme('light'); localStorage.setItem('theme', 'light') }}
                />}
            </div>
        </div>
    )
}

export default Header