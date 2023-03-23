import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookslice';

const Book = ({
  id, title, author,
}) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook({ id }));
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>{author}</p>
      <div>
        <button type="button">Comments</button>
        <button type="button" onClick={handleRemoveBook}>Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
