import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/bookslice';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  function addBookHandler(event) {
    event.preventDefault();

    const newBook = {
      id: Math.floor(Math.random() * 1000),
      title,
      author,
    };

    dispatch(addBook(newBook));

    setTitle('');
    setAuthor('');
  }
  return (
    <div className="form">
      <form>
        <h3>Add a Book</h3>
        <input type="text" name="title" placeholder="title" onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" name="author" placeholder="author" onChange={(e) => setAuthor(e.target.value)} required />
        <button type="submit" onClick={addBookHandler}>Add Book</button>
      </form>
    </div>
  );
};

export default Form;
