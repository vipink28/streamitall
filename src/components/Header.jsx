import React, { useEffect } from 'react';
import Ratings from './Ratings';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeaderVideos, selectHeaderVideo } from '../features/common/commonSlice';

function Header(props) {
    const { video } = props;
    const dispatch = useDispatch();
    const { data, status, error } = useSelector(selectHeaderVideo);
    useEffect(() => {
        if (video) {
            dispatch(fetchHeaderVideos({ platform: "tv", id: video.id }));
        }
    }, [video]);

    return (
        <div className='position-relative vh-100'>
            <img className='header-img' src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`} alt="" />

            <div className='caption'>
                <h1 className='title display-2'>{data?.name || data?.original_name || data?.title || data?.original_title}</h1>
                <p className='fs-4'>{data?.overview}</p>
                <Ratings voteAverage={data?.vote_average} voteCount={data?.vote_count} />
            </div>

            <div className='header-vignette'></div>
            <div className='header-bottom-vignette'></div>
        </div>
    );
}

export default Header;