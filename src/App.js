import './App.css';
import { Routes, Route } from 'react-router-dom';
import Categories from './routes/Categories';
import Books from './routes/Books';
import Navbar from './components/Navbar';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/" element={<Layout />} />
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/*" element={<h1>Page Not Found!</h1>} />
      </Routes>
    </>
  );
}

export default App;
