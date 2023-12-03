import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../navigation/navigation.styles.scss';

import logo from '../../assets/crown.svg';

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={logo} />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
