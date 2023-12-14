import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

function Browse(props) {
    const param = useParams();

    return (
        <>
            <Header />
        </>
    );
}

export default Browse;