import React from 'react';

const Form = () => (
  <>
    <form>
      <h1>ADD NEW BOOK</h1>
      <input type="text" placeholder="Book title" required />
      <input type="text" placeholder="Author" required />
      <button type="button">ADD BOOK</button>
    </form>
  </>
);

export default Form;
