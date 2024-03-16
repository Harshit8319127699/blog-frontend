// components/Pagination.tsx
import React from 'react';

interface PaginationProps {
 currentPage: number;
 lastPage: number;
 maxLength: number;
 setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, lastPage, maxLength, setCurrentPage }) => {
 const pageNumbers = [];
 for (let i = 1; i <= lastPage; i++) {
    pageNumbers.push(i);
 }

 return (
    <nav className="flex justify-center items-center" aria-label="Pagination">
      <ul className="flex gap-2">
        {pageNumbers.map((pageNum, idx) => (
          <li key={idx} className={`${pageNum === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} px-3 py-1 rounded cursor-pointer`} onClick={() => setCurrentPage(pageNum)}>
            {pageNum}
          </li>
        ))} ̰
      </ul>
    </nav>
 );
};

export default Pagination;
