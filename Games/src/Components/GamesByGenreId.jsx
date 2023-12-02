import React, { useEffect } from 'react'

function GamesByGenreId({ gameList }) {
    useEffect(() => {

    }, [])

    return (
        <div>
            <h2 className='font-bold text-[30px] dark:text-white mt-5'>Popular Games</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>

                {gameList.map((item) => (
                    <div className='pb-14 bg-slate-300 dark:bg-gray-700  p-4 rounded-lg h-full 
                    hover:scale-110 transition-all duration-300 cursor-pointer'>

                        <img src={item.background_image} className='w-full h-[80%] rounded-xl object-cover' />

                        <h2 className='text-[20px] dark:text-white font-bold p-2'>{item.name}
                            <span className='p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium'>{item.metacritic}</span></h2>

                        <h2 className='dark:text-slate-100'> ⭐{item.rating}☁{item.reviews_count} 👌{item.suggestions_count}</h2>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default GamesByGenreId