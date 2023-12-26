const Pagination = ({ page, lastPage, setPage }) => {
  
    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1)
    scrollTop()
  }

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1)
    scrollTop()
  }
  
  
  
    return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 font-bold text-xl">
      {page <= 1 ? null: 
      <button onClick={handlePrevPage} className="hover:text-indigo-500 transition-all">Prev</button>
      }
      
      <p>{page} of {lastPage} </p>

      {page >= lastPage ? null:
      <button onClick={handleNextPage} className="hover:text-indigo-500 transition-all">Next</button>
      }
      
    </div>
  );
};

export default Pagination;
