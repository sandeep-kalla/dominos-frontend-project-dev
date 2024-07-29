import './styles/navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/everyday" className={({ isActive }) => isActive? 'navbar-link active' : 'navbar-link'} end>EVERYDAY VALUE</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/" className={({ isActive }) => isActive? 'navbar-link active' : 'navbar-link'}  end>RECOMMENDED</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/new-launches" className={({ isActive }) => isActive? 'navbar-link active' : 'navbar-link'}  >NEW LAUNCHES</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/cheese-volcano" className={({ isActive }) => isActive? 'navbar-link active' : 'navbar-link'}  >CHEESE VOLCANO</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/veg-pizza" className={({ isActive }) => isActive? 'navbar-link active' : 'navbar-link'}  >VEG PIZZA</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/gourmet-pizza" className={({ isActive }) => isActive? 'navbar-link active' : 'navbar-link'}  >GOURMET PIZZA</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/non-veg-pizza" className={({ isActive }) => isActive? 'navbar-link active' : 'navbar-link'}  >NON-VEG PIZZA</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/beverages" className={({ isActive }) => isActive? 'navbar-link active' : 'navbar-link'}  >BEVERAGES</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/breads" className={({ isActive }) => isActive? 'navbar-link active' : 'navbar-link'}  >GARLIC BREADS & MORE</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/pizza-mania" className={({ isActive }) => isActive? 'navbar-link active' : 'navbar-link'}  >PIZZA MANIA</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/value-combos" className={({ isActive }) => isActive? 'navbar-link active' : 'navbar-link'}  >VALUE COMBOS</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/desserts" className={({ isActive }) => isActive? 'navbar-link active' : 'navbar-link'}  >DESSERTS</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/cheese-burst-pizza" className={({ isActive }) => isActive? 'navbar-link active' : 'navbar-link'}  >CHEESE BURST PIZZA</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/spicy-pizza" className={({ isActive }) => isActive? 'navbar-link active' : 'navbar-link'}  >SPICY PIZZA</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;