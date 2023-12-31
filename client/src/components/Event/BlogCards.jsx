import React from 'react';
import { FaUser } from 'react-icons/fa';
import PropTypes from 'prop-types';

const BlogCards = ({ blogs, currentPage, pageSize, selectedCategory }) => {
  const images = [
    {
      id: 1,
      image: '/src/assets/Events/event-1.png'
    },
    {
      id: 2,
      image: '/src/assets/Events/event-2.png'
    },
    {
      id: 3,
      image: '/src/assets/Events/event-3.png'
    },
    {
      id: 4,
      image: '/src/assets/Events/event-4.png'
    },
    {
      id: 5,
      image: '/src/assets/Events/event-5_1.png'
    },{
      id: 6,
      image: '/src/assets/Events/event-6.png'
    },
    {
      id: 7,
      image: '/src/assets/Events/event-7.png'
    },
    {
      id: 8,
      image: '/src/assets/Events/event-8.png'
    }
  ];

  const filteredBlogs = blogs
    .filter((blog) => !selectedCategory || blog.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 ">
      {filteredBlogs.map((blog) => {
        // Find the corresponding image object based on blog ID
        const blogImage = images.find((img) => img.id === blog.id);

        return (
          <a href={`blogs/${blog.id}`} key={blog.id} className="block p-5 shadow-lg rounded cursor-pointer">
            <div>
              {/* Access the image property from the found image object */}
              <img src={blogImage ? blogImage.image : ''} alt="" className="w-full" />
            </div>
            <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer">{blog.title}</h3>
            <p className="mb-2">
              <FaUser className="inline-flex items-center mr-2" />
              {blog.author}
            </p>
            <p className="text-sm text-gray-500">Published: {blog.published_date}</p>
          </a>
        );
      })}
    </div>
  );
};

BlogCards.propTypes = {
  blogs: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  selectedCategory: PropTypes.string,
};

export default BlogCards;
