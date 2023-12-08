import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNowPlayingMovies, selectNowPlayingMovies } from '../features/movie/movieSlice';
import Card from './Card';

function Row(props) {
    const nowPlayingMovies = useSelector(selectNowPlayingMovies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNowPlayingMovies());
    }, [])


    return (
        <div className='text-white py-4'>
            <h3 className='mb-3'>Row Title</h3>
            <Swiper
                spaceBetween={20}
                slidesPerView={5}
                modules={[Navigation]}
                navigation
            >
                {
                    nowPlayingMovies.data?.results.map((movie) => {
                        return (
                            <SwiperSlide key={movie.id}>
                                <Card video={movie} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}

export default Row;