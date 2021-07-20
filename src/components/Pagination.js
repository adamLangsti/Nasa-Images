import React from 'react';

const Pagination = ({ imagesPerPage, paginate, totalImages }) => {
    const pageNumbers = [];
    for (let i = 0; i < Math.ceil(totalImages / imagesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className='pagination'>
            <ul className='pagination-list'>
                {pageNumbers.map((number, index) => {
                    return (
                        <li key={number}>
                            <a href={index} onClick={() => paginate(number)}>
                                {number + 1}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Pagination;
