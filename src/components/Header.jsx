import React, { useEffect, useState } from 'react';
import Ratings from './Ratings';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeaderVideos, fetchVideoDetails, selectHeaderVideo } from '../features/common/commonSlice';
import VideoPlayer from './VideoPlayer';
import Genre from './Genre';

function Header(props) {
    const { video, platform } = props;
    const dispatch = useDispatch();
    const { data, status, error } = useSelector(selectHeaderVideo);
    const [isPlay, setIsPlay] = useState(false);

    useEffect(() => {
        if (video) {
            dispatch(fetchHeaderVideos({ platform: platform, id: video.id }));
        }
    }, [video]);

    const playTrailer = () => {
        setIsPlay(true);
    }

    const showDetails = () => {
        dispatch(fetchVideoDetails({ platform: platform, id: video.id }))
    }

    return (
        <div className='position-relative vh-100'>
            {
                !isPlay ?
                    <>
                        <img className='header-img' src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`} alt="" />
                        <div className='caption'>
                            <h1 className='title display-2'>{data?.name || data?.original_name || data?.title || data?.original_title}</h1>
                            <p className='fs-4'>{data?.overview}</p>
                            <Genre genreList={data?.genres} />
                            <Ratings voteAverage={data?.vote_average} voteCount={data?.vote_count} />

                            <button className='btn btn-warning me-2' onClick={showDetails} data-bs-toggle="modal" data-bs-target="#details-modal">More Info</button>
                            <button className='btn btn-info' onClick={playTrailer}>Play</button>
                        </div>
                    </>
                    :
                    <VideoPlayer videoList={data?.videos?.results} isHeader={true} />
            }

            <div className='header-vignette'></div>
            <div className='header-bottom-vignette'></div>
        </div>
    );
}

export default Header;

