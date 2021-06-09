import React from 'react';
import './Pagination.scss';

const Pagination = ({totalIssuesPerPage, totalIssues, paginate, presentPage}) => {
    const numberOfPagesArr = []

    for(let i = 1; i <= Math.ceil(totalIssues / totalIssuesPerPage); i++) {
        numberOfPagesArr.push(i)
    }
    return (
        <nav>
            <ul className="pagination">
                {numberOfPagesArr.map(number => (
                    <li key={number} className={`page-item ${presentPage === number ? 'active' : ''}`}>
                        <button onClick={() => paginate(number)} className='page-link'>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;