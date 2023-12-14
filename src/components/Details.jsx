import React from 'react';
import { useSelector } from 'react-redux';
import { selectVideoDetails } from '../features/common/commonSlice';
import VideoPlayer from './VideoPlayer';
import Ratings from './Ratings';
import { yearFormat } from '../utility';

function Details(props) {
    const video = useSelector(selectVideoDetails);
    const { data, error, status } = video;
    return (
        <div className="modal" tabIndex="-1" id='details-modal'>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header border-bottom-0" data-bs-theme="dark">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <VideoPlayer videoList={data?.videos?.results} />
                        <div className="container-fluid py-3">
                            <div className='row'>
                                <div className="col-md-8">
                                    <div className="d-flex">
                                        <div>
                                            <h1 className='title'>{data?.name || data?.original_name || data?.title || data?.original_title} ({yearFormat(data?.release_date || data?.first_air_date)})</h1>
                                            <h3 className='tagline fs-5 text-warning'>{data?.tagline}</h3>
                                            <Ratings voteAverage={data?.vote_average} voteCount={data?.vote_count} />
                                            <p>{data?.overview}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <p>Production Companies: {
                                        data?.production_companies.map((company) => (
                                            <span key={company?.id}>{company?.name}</span>
                                        ))
                                    } </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;