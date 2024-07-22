import React from "react";
import styles from './pagination_buttons.module.scss'
import {FilledPaginationButton, UnfilledPaginationButton} from "./ButtonForPagination/ButtonForPagination.jsx";
import Dots from './ButtonForPagination/Dots/Dots.jsx'

const MAX_BUTTONS_TO_SHOW = 4;

function PaginationButtons({currentPage, totalPages, onPageChange}) {

    const pageNumbers = [];
    const halfButtons = Math.floor(MAX_BUTTONS_TO_SHOW / 2);
    let startPage = Math.max(currentPage - halfButtons, 1);
    let endPage = startPage + MAX_BUTTONS_TO_SHOW - 1;
    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(endPage - MAX_BUTTONS_TO_SHOW + 1, 1);
    }
    if (startPage > 1) {
        pageNumbers.push(1);
        if (startPage > 2) {
            pageNumbers.push(-1);
        }
    }
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            pageNumbers.push(-1);
        }
        pageNumbers.push(totalPages);
    }

    return (
        <div className={styles.container}>
            {
                pageNumbers.map((number) => (
                    <React.Fragment key={number}>
                        {
                            number === -1 ? (
                                <Dots/>
                            ) : number === currentPage ? (
                                <FilledPaginationButton count={number}/>
                            ) : (
                                <UnfilledPaginationButton
                                    count={number}
                                    onClick={() => onPageChange(number)}
                                />
                            )
                        }
                    </React.Fragment>
                ))
            }
        </div>
    );
}

export default PaginationButtons
