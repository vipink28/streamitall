import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNetflixOriginals } from '../features/tv/tvSlice';

function HomeScreen(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchNetflixOriginals());
    }, [])
    return (
        <div>
            Home Screen
        </div>
    );
}

export default HomeScreen;