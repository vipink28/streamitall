import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import { fetchNetflixOriginals, selectNetflixOriginals } from '../features/tv/tvSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNowPlayingMovies, selectNowPlayingMovies } from '../features/movie/movieSlice';
import { requests } from '../utility/apirequests';
import axios from '../utility/axios';
import Row from '../components/Row';

function Browse(props) {
    const param = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const collection = useSelector(param.platform === 'tv' ? selectNetflixOriginals : selectNowPlayingMovies);
    const { data, error, status } = collection;

    const [genreList, setGenreList] = useState([]);

    useEffect(() => {
        if (param.platform === 'tv') {
            dispatch(fetchNetflixOriginals());
        } else if (param.platform === 'movie') {
            dispatch(fetchNowPlayingMovies());
        } else {
            navigate('/browse/tv');
        }
    }, [param])
    const random = Math.floor(Math.random() * data?.results.length);

    const fetchGenreList = async (type) => {
        const response = await axios.get(requests.getGenreList(type));
        setGenreList(response.data.genres);
    }

    useEffect(() => {
        if (param) {
            fetchGenreList(param.platform);
        }
    }, [param]);

    return (
        <>
            {
                <Header video={data?.results[random]} platform={param.platform} />
            }
            <div className='container-fluid'>

                {
                    genreList ? genreList.map((genre) => (
                        <Row title={genre.name} platform={param.platform} isGenre={true} genreId={genre.id} />
                    )) : ""
                }

            </div>
        </>
    );
}

export default Browse;