import React from 'react';

const Image = ({ nasaImages, loading }) => {
    return (
        <ul className='image-container'>
            {loading ? (
                <p>Loading, please wait...🤌</p>
            ) : (
                nasaImages.map((image, index) => {
                    return (
                        <li key={index}>
                            <img src={image.img_src} alt='mars-rover' />
                            <h1>{image.name.full_name}</h1>
                            <h2>{image.earth_date}</h2>
                            <p>{`ID: ${image.id}`}</p>
                        </li>
                    );
                })
            )}
        </ul>
    );
};

export default Image;
