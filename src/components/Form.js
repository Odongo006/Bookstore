import uniqid from 'uniqid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { booksActions, addBook } from '../redux/books/bookslice';

function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addBookHandler = (e) => {
    e.preventDefault();
    const books = {
      item_id: uniqid(),
      title,
      author,
      category: 'Fiction',
    };

    dispatch(booksActions.addBook(books));
    dispatch(addBook(books));
    setTitle('');
    setAuthor('');
  };

  return (
    <>
      <form>
        <h3>Add New Book</h3>
        <input type="text" name="title" placeholder="title" onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" name="author" placeholder="author" onChange={(e) => setAuthor(e.target.value)} required />
        <button type="submit" onClick={addBookHandler}>Add Book</button>
      </form>
    </>
  );
}

export default Form;
