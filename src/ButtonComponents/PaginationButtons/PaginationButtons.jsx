import React from "react";
import styles from './pagination_buttons.module.scss'
import {FilledPaginationButton, UnfilledPaginationButton} from "./ButtonForPagination/ButtonForPagination.jsx";
import Dots from './ButtonForPagination/Dots/Dots.jsx'

function PaginationButtons({ currentPage, totalPages, onPageChange }) {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className={styles.container}>
            {pageNumbers.map((number) => (
                <React.Fragment key={number}>
                    {number === currentPage ? (
                        <FilledPaginationButton count={number} />
                    ) : (
                        <UnfilledPaginationButton
                            count={number}
                            onClick={() => onPageChange(number)}
                        />
                    )}
                    {number < totalPages - 1 && <Dots />}
                </React.Fragment>
            ))}
        </div>
    );
}

export default PaginationButtons
