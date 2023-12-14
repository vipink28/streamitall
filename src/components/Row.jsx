import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNowPlayingMovies, selectNowPlayingMovies } from '../features/movie/movieSlice';
import Card from './Card';

function Row(props) {
    const { title, action, selector, isPoster, platform } = props;
    const collection = useSelector(selector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(action());
    }, [])


    return (
        <div className='text-white py-4'>
            <h3 className='mb-3'>{title}</h3>
            <Swiper
                spaceBetween={20}
                slidesPerView={5}
                modules={[Navigation]}
                navigation
            >
                {
                    collection.data?.results.map((movie) => {
                        return (
                            <SwiperSlide key={movie.id}>
                                <Card video={movie} isPoster={isPoster} platform={platform} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}

export default Row;