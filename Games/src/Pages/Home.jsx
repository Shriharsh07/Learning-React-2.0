import React, { useEffect, useState } from 'react'
import GenreList from '../Components/GenreList'
import GlobalApi from '../Services/GlobalApi'
import Banner from '../Components/Banner';
import TrendingGames from '../Components/TrendingGames';
import GamesByGenreId from '../Components/GamesByGenreId';

function Home() {

    const [allGameList, setAllGameList] = useState();
    const [gamesByGenre, setGamesByGenre] = useState([]);
    const [GenreName, setGenreName] = useState('Action')

    useEffect(() => {
        getAllGamesList();
        getGameListByGenreId(4);
    }, [])

    const getAllGamesList = () => {
        GlobalApi.getAllGames.then((resp) => {
            setAllGameList(resp.data.results);
        })
    }

    const getGameListByGenreId = (id) => {
        GlobalApi.getGameListbyGenreId(id).then((resp) => {
            console.log(resp.data.results);
            setGamesByGenre(resp.data.results);
        })
    }

    return (
        <div className='grid grid-cols-4 px-8'>
            <div className='h-full hidden md:block'>
                <GenreList GenreId={(GenreId) => getGameListByGenreId(GenreId)}
                    GenreName={(name) => setGenreName(name)} />
            </div>
            <div className='col-span-4 md:col-span-3 px-5'>
                {allGameList?.length > 0 && gamesByGenre.length > 0 ?
                    <div>
                        < Banner gameBanner={allGameList[0]} />
                        <TrendingGames gameList={allGameList} />
                        <GamesByGenreId gameList={gamesByGenre}
                            GenreName={GenreName} />
                    </div>
                    : null}
            </div>
        </div >
    )
}

export default Home