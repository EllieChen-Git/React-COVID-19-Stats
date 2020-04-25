import React from "react";

const Pages = ({ allData, dataPerPage, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a onClick={() => paginate(number)} href="#!">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pages;
