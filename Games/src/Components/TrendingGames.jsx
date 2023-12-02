import React, { useEffect } from 'react'

function TrendingGames({ gameList }) {

    useEffect(() => {
        console.log(gameList);
    }, [])
    return (
        <div className='mt-5 hidden md:block'>
            <h2 className='font-bold text-[30px] dark:text-white'>Trending Games</h2>
            <div className='md:grid grid-cols-3 gap-4 lg:grid-cols-4'>

                {gameList.map((item, index) => index < 4 && (
                    <div className='bg-slate-400 rounded-lg group mt-5
                    hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer'>

                        <img src={item.background_image} className='h-[270px] rounded-t-lg object-cover' />

                        <h2 className='dark:text-white text-[18px] font-bold p-2'>{item.name}</h2>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default TrendingGames