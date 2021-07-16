import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MarsImages = () => {
    const [nasaImages, setNasaImages] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchNasaMarsImages = async () => {
        const response = await axios.get('http://localhost:5000/api/images');
        const responseJson = await response.data;
        console.log(responseJson);
        setNasaImages(responseJson);
        setLoading(false);
    };

    useEffect(() => {
        fetchNasaMarsImages();
    }, []);

    return (
        <div className="mars-images-container">
            {loading ? (
                <p>Loading, please wait...</p>
            ) : (
                nasaImages.map((images) => {
                    return (
                        <ul key={images.id}>
                            <li>
                                <img src={images.img_src} alt='mars-images' />
                                <h2>{images.name.full_name}</h2>
                            </li>
                        </ul>
                    );
                })
            )}
        </div>
    );
};

export default MarsImages;
