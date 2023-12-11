import React from 'react';

function Genre(props) {
    const { genreList } = props;
    return (
        <div className='d-flex'>
            {
                genreList.map(() => {
                    return (
                        <span class="badge text-bg-warning">Warning</span>
                    )
                })
            }
        </div>
    );
}

export default Genre;