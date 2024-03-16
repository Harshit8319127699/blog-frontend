"use client"
import React, { useEffect, useState } from 'react';
import { BlogCard } from './components/BlogCard';
import Pagination from './components/Pagination';
import Link from 'next/link';

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const PER_PAGE = 9;
  const [blogPosts, setBlogPosts] = useState([]); // State to store fetched blog posts

  useEffect(() => {
    fetch('https://blog-app-task.onrender.com/api/posts')
      .then(response => response.json())
      .then(data => setBlogPosts(data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);


  const lastPage = Math.ceil(blogPosts.length / PER_PAGE);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const currentPageData = blogPosts.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentPageData.map((post, index) => (
          <Link key={index} href={`/post/${post["slug"]}`}>
            <BlogCard
              buttonLabel={'Read More'}
              key={index}
              title={post["title"]}
              description={post["shortDescription"]}
              imageUrl={post["imageUrl"]}
              onButtonClick={() => `/post/${post["slug"]}`}
            />
          </Link>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        lastPage={lastPage}
        maxLength={7}
        setCurrentPage={handlePageChange}
      />
    </div>
  );
};

export default Home;