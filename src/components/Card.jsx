import React from 'react';

function Card(props) {
    const { video, isPoster } = props;
    return (
        <div className='card text-white'>
            <img className='card-img-top' src={`https://image.tmdb.org/t/p/original${isPoster ? video?.poster_path : video?.backdrop_path}`} alt="" />
            <div className="card-body">
                <h5 className='card-title'>{video?.name || video?.original_name || video?.title || video?.original_title}</h5>
            </div>
        </div>
    );
}

export default Card;