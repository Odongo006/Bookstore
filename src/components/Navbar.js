import { Link } from 'react-router-dom';
import styles from './styles/Navbar.module.css';
import user from './img/user.svg';

const Navbar = () => (
  <div className={styles.nav_container}>
    <nav>
      <h1>Bookstore CMS</h1>

      <ul>
        <li className={styles.list}>
          <Link className={styles.link} to="/">BOOKS</Link>
        </li>

        <li className={styles.list}>
          <Link className={styles.link} to="/categories">CATEGORIES</Link>
        </li>
      </ul>

      <div className={styles.user}>
        <div className={styles.user_min}>
          <img src={user} alt="user-icon" />
        </div>
      </div>
    </nav>
  </div>
);
export default Navbar;
