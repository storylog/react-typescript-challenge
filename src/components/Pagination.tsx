import React from 'react'

const Pageination = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const onClickPrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  const onClickNext = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex justify-between items-center pt-9">
      <button onClick={onClickPrevious} className="border-2 border-blue-500 rounded-lg font-bold text-blue-500 px-4 py-3 transition duration-300 ease-in-out">
        Previous page
      </button>
      <div className="text-blue-500 text-lg">
        {currentPage}
      </div>
      <button onClick={onClickNext} className="bg-blue-500 rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600">
        Next page
      </button>
    </div>
  );
};

export default Pageination;
