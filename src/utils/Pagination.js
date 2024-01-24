import React from "react";
import classnames from "classnames";
import { usePagination, DOTS } from "./usePagination";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <nav aria-label="Page navigation">
      <ul className="flex justify-center">
        <li>
          <button
            disabled={currentPage === 1}
            className={classnames(
              "h-10 px-5 text-indigo-600 transition-colors duration-150 rounded-l-lg focus:shadow-outline hover:bg-indigo-100",
              {
                " opacity-50 cursor-not-allowed": currentPage === 1,
              }
            )}
            onClick={onPrevious}
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
        {paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return (
              <li className="pagination-item dots">
                <button className="h-10 px-5 text-indigo-600 transition-colors duration-150 focus:shadow-outline hover:bg-indigo-100">
                  &#8230;
                </button>
              </li>
            );
          }

          return (
            <li
              key={pageNumber}
              className={classnames("pagination-item", {
                selected: pageNumber === currentPage,
              })}
            >
              <button
                className="h-10 px-5 text-indigo-600 transition-colors duration-150 focus:shadow-outline hover:bg-indigo-100"
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            </li>
          );
        })}
        <li>
          <button
            disabled={currentPage === lastPage}
            className={classnames(
              "h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white rounded-r-lg focus:shadow-outline hover:bg-indigo-100",
              {
                " opacity-50 cursor-not-allowed": currentPage === lastPage,
              }
            )}
            onClick={onNext}
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
