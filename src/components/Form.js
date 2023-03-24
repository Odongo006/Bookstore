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
    <div className={styles.form_container}>
      <form>
        <h2>Add New Book</h2>
        <input type="text" name="title" placeholder="title" onChange={(e) => setTitle(e.target.value)} className={styles.input_1} required />
        <input type="text" name="author" placeholder="author" onChange={(e) => setAuthor(e.target.value)} className={styles.input_2} required />
        <button type="submit" onClick={addBookHandler} className={styles.addBook_btn}>Add Book</button>
      </form>
    </div>
  );
}

export default Form;
