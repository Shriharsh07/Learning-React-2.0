import React, { useEffect, useState } from 'react'
import GobalApi from '../Services/GlobalApi'

function GenreList({ GenreId, GenreName }) {

    const [genreList, setGenreList] = useState([])

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        getGenreList();
    }, [])

    const getGenreList = () => {
        GobalApi.getGenreList.then((resp) => {
            setGenreList(resp.data.results)
        })
    }

    return (
        <div>
            <h2 className='text-[30px] font-bold dark:text-white'>Genre</h2>

            {genreList.map((item, index) => (
                <div
                    onClick={() => { { setActiveIndex(index) }; GenreId(item.id); GenreName(item.name) }}

                    className={`flex p-2 mb-2 gap-2 items-center cursor-pointer hover:bg-gray-300 rounded-lg group hover:dark:bg-gray-600 ${activeIndex == index ? "bg-gray-300 dark:bg-gray-600" : null}`}>

                    <img src={item.image_background} className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 ${activeIndex == index ? "scale-105" : null}`} />

                    <h3 className={`dark:text-white text-[18px] group-hover:font-bold transition-all ease-out duration-300 ${activeIndex == index ? "font-bold" : null}`}>{item.name}</h3>
                </div>
            ))
            }
        </div >
    )
}

export default GenreList