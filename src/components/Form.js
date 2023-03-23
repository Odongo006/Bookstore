import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/bookslice';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleAddBook = (event) => {
    event.preventDefault();
    dispatch(addBook({
      item_id: uuidv4(),
      title,
      author,
    }));
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <h1>ADD NEW BOOK</h1>
      <form onSubmit={handleAddBook}>
        <input type="text" placeholder="Book title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default Form;
