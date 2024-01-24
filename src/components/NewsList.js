import React, { useState, useMemo } from "react";
import Pagination from "../utils/Pagination";

const PageSize = 9;

function NewsList({ data }) {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data
      .sort(function (a, b) {
        return b.node.frontmatter.date - a.node.frontmatter.date;
      })
      .slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data]);

  return (
    <section>
      <div className="max-w-6xl px-4 mx-auto sm:px-6 pt-4">
        {/* Main content */}
        <div className="md:flex md:justify-between">
          {/* Articles container */}
          <div className="-mt-4 md:grow">
            {/* 1st article */}
            {currentTableData.map(({ node }, index) => {
              return (
                <article
                  key={index}
                  className="flex items-center py-4 border-b border-gray-200"
                >
                  <div>
                    <header>
                      <h2 className="mb-2 text-blue-500 h4">
                        <a
                          href={node.frontmatter.link}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:underline"
                        >
                          {node.frontmatter.title}
                        </a>
                      </h2>
                    </header>
                    <div className="mb-4 text-lg text-gray-600">
                      {node.frontmatter.blurb.replace(
                        /^(.{350}[^\s]*).*/,
                        '$1'
                      )}
                      ...{' '}
                    </div>
                    <footer className="text-sm">
                      <div className="flex items-center">
                        <div>
                          <span className="text-gray-600">
                            By {node.frontmatter.author}
                          </span>
                          <span className="text-gray-600">
                            {" "}
                            · {node.frontmatter.date}
                          </span>
                        </div>
                      </div>
                    </footer>
                  </div>
                  <a
                    href={node.frontmatter.link}
                    target="_blank"
                    rel="noreferrer"
                    className="block ml-6 shrink-0"
                  >
                    <span className="sr-only">Read more</span>
                    <svg
                      className="w-4 h-4 text-blue-400 fill-current"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
                    </svg>
                  </a>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mb-12">
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={data.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </section>
  );
}

export default NewsList;
