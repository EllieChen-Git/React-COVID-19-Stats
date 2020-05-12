import React from "react";
import Pagination from "@material-ui/lab/Pagination";

const Pages = ({ count, setCurrentPage }) => {
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Pagination
      count={count}
      onChange={handleChange}
      variant="outlined"
      color="primary"
      shape="rounded"
      showFirstButton
      showLastButton
      siblingCount={0}
      boundaryCount={1}
    />
  );
};

export default Pages;
