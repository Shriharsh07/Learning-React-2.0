import React, { useEffect, useState } from 'react'
import GobalApi from '../Services/GlobalApi'

function GenreList() {

    const [genreList, setGenreList] = useState([])

    useEffect(() => {
        getGenreList();
    }, [])

    const getGenreList = () => {
        GobalApi.getGenreList.then((resp) => {
            console.log(resp.data.results);
            setGenreList(resp.data.results)
        })
    }

    return (
        <div>
            <h2 className='text-[30px] font-bold dark:text-white'>Genre</h2>

            {genreList.map((item) => (
                <div className='flex p-2 mb-2 space-x-3 items-center cursor-pointer hover:bg-gray-300 rounded-lg group'>

                    <img src={item.image_background} className='w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300' />

                    <h3 className='dark:text-white text-[18px] group-hover:font-bold transition-all ease-out duration-300'>{item.name}</h3>
                </div>
            ))}
        </div>
    )
}

export default GenreList