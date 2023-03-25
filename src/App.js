import './App.css';
import { Routes, Route } from 'react-router-dom';
import Categories from './routes/Categories';
import Books from './routes/Books';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
