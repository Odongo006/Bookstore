import uniqid from 'uniqid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { booksActions, addBook } from '../redux/books/bookslice';
import styles from './styles/Form.module.css';

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
    <div>
      <h2>Add New Book</h2>
      <form className={styles.form_container}>
        <input className={styles.input_1} type="text" placeholder="Book title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input className={styles.input_2} type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <button className={styles.addBook_btn} type="button" onClick={addBookHandler}>Add Book</button>
      </form>
    </div>
  );
}

export default Form;
