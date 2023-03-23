import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/Categories/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const handleCheckStatus = () => {
    dispatch(checkStatus());
  };

  const status = useSelector((state) => state.categories.status);

  return (
    <>
      <div>{status}</div>
      <button type="button" onClick={handleCheckStatus}>Check Status</button>
    </>
  );
};

export default Categories;
