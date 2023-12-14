import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import { fetchNetflixOriginals, selectNetflixOriginals } from '../features/tv/tvSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNowPlayingMovies, selectNowPlayingMovies } from '../features/movie/movieSlice';

function Browse(props) {
    const param = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const collection = useSelector(param.platform === 'tv' ? selectNetflixOriginals : selectNowPlayingMovies);
    const { data, error, status } = collection;


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

    return (
        <>
            {
                <Header video={data?.results[random]} platform={param.platform} />
            }
        </>
    );
}

export default Browse;