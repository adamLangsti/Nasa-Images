import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import Image from './Image';

const MarsImages = () => {
    const [nasaImages, setNasaImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [imagesPerPage] = useState(10);

    const fetchNasaMarsImages = async () => {
        const response = await axios.get('http://localhost:5000/api');
        const responseJson = await response.data;
        console.log(responseJson);
        setNasaImages(responseJson);
        setLoading(false);
    };

    useEffect(() => {
        fetchNasaMarsImages();
    }, []);

    // GET CURRENT POSTS
    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImage = nasaImages.slice(indexOfFirstImage, indexOfLastImage);

    // CHANGE PAGE
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='container'>
            <Image nasaImages={currentImage} loading={loading} />
            <Pagination
                imagesPerPage={imagesPerPage}
                totalImages={nasaImages.length}
                paginate={paginate}
            />
        </div>
    );
};

export default MarsImages;
