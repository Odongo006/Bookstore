import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';

const Books = () => {
  const booksArray = useSelector((state) => state.books);
  return (
    <>
      {booksArray.map((item) => (
        <div key={item.item_id}>
          <Book id={item.item_id} title={item.title} author={item.author} />
        </div>
      ))}
      <Form />
    </>
  );
};

export default Books;
