import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOriginals, selectNetflixOriginals } from '../features/tv/tvSlice';
import Header from '../components/Header';

function HomeScreen(props) {
    const dispatch = useDispatch();
    const nfOriginals = useSelector(selectNetflixOriginals);
    const { status, data, error } = nfOriginals;

    const [randomIndex, setRandomIndex] = useState(0);
    useEffect(() => {
        dispatch(fetchNetflixOriginals());
    }, [])

    useEffect(() => {
        if (data) {
            const random = Math.floor(Math.random() * data.results.length);
            setRandomIndex(random);
        }
    }, [data])



    return (
        <>
            {data ?
                <Header video={data.results[randomIndex]} />
                : "no data"
            }
        </>
    );
}

export default HomeScreen;