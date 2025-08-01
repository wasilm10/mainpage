import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/l1.png';
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png';


const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const [mobileMenu,setmobileMenu]=useState(false);
  const toggleMenu=()=>{
    mobileMenu?setmobileMenu(false):setmobileMenu(true);
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="logo" className="logo" />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Our Feature</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Glimpse</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-2600} duration={500}>Testimononials</Link></li>
        
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className="btn">Contact us</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  );
};

export default Navbar;
