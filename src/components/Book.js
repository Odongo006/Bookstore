import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook, getBooks } from '../redux/books/bookslice';

const Book = ({
  id, title, author,
}) => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.books.bookList);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

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
      {bookList.map((book) => (
        <div key={book.item_id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </div>
      ))}
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
