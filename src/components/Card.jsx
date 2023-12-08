import React from 'react';

function Card(props) {
    const { video } = props;
    return (
        <div className='card'>
            <img className='img-fluid' src={`https://image.tmdb.org/t/p/original${video?.backdrop_path}`} alt="" />
        </div>
    );
}

export default Card;