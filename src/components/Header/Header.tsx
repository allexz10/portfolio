import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import navigationTitles from '../../data/navigationTitles';
import buttonIcon from '../../assets/images/btnIcon.svg';
import buttonClose from '../../assets/images/btnClose.svg';
import './Header.scss';

const Header = () => {
  const [open, setOpen] = useState(false);

  const closeNavMenu = () => {
    if (window.scrollY > 400) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', closeNavMenu);
    return () => {
      window.removeEventListener('scroll', closeNavMenu);
    };
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <span className="logo__text">Miguel UI</span>
      </div>
      <nav className="navigation">
        {navigationTitles.map(({ title, routerLink }) => (
          <NavLink
            key={title}
            to={routerLink}
            className={({ isActive }) => (isActive ? 'navigation__link active' : 'navigation__link')}
          >
            {title}
          </NavLink>
        ))}
      </nav>
      <div className="mobile__nav" onScroll={() => setOpen(false)}>
        <button className="mobile__button" onClick={() => setOpen(!open)}>
          <img
            className="button__icon"
            style={{ objectFit: 'cover' }}
            src={open ? buttonClose : buttonIcon}
            alt="buttonImg"
          />
        </button>
        <ul className={open ? 'nav__list active' : ' nav__list'}>
          {navigationTitles.map(({ title, routerLink }) => (
            <li key={routerLink}>
              <NavLink
                to={routerLink}
                onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? 'navigation__link active' : 'navigation__link')}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
export default Header;
