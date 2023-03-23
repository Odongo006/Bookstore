import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../redux/books/bookslice';

function Book() {
  const books = useSelector((state) => state.books.bookList);
  const status = useSelector((state) => state.books.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.item_id}>
            {book.title}
            {' '}
            by
            {book.author}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Book;
