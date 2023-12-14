import React from 'react';

function Genre(props) {
    const { genreList } = props;
    return (
        <div className='d-flex gap-2'>
            {
                genreList?.map((genre) => {
                    return (
                        <span class="badge text-bg-warning">{genre?.name}</span>
                    )
                })
            }
        </div>
    );
}

export default Genre;