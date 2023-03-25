import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { booksActions, removeBook } from '../redux/books/bookslice';
import styles from './styles/Book.module.css';

function Book({
  id, title, author,
}) {
  const dispatch = useDispatch();

  const removeHandler = (event) => {
    const { id } = event.target.dataset;
    dispatch(booksActions.removeBook(id));
    dispatch(removeBook(id));
  };

  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <p className={styles.category}>Category</p>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.author}>{author}</p>
        <div className={styles.book_btn}>
          <button className={styles.btn} type="button">Comments</button>
          <button className={styles.btn_remove} data-id={id} type="button" onClick={removeHandler}>
            Remove
          </button>
          <button className={styles.btn} type="button">Edit</button>
        </div>
      </div>
      <div className={styles.contain}>
        <div className={styles.ovalContainer}>
          <div className={styles.Oval} />
        </div>
        <div>
          <p className={styles.completion}>75%</p>
          <p className={styles.completed}>Completed</p>
        </div>
        <div className={styles.bar} />
        <div className={styles.chapterContainer}>
          <div className={styles.chapterone}>CURRENT CHAPTER</div>
          <div className={styles.chapter}>Chapter 3: &quot;Chapter Title&quot;</div>
          <button className={styles.chapterBtn} type="button">
            <span className={styles.update}>Update Progress</span>
          </button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
