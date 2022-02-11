import { Link } from 'react-router-dom';

import './NotFound.scss';

const NotFound = () => (
  <div className="notfound">
    <h1 className="notfound__title">404 Not Found</h1>
    <h3 className="notfound__text">Lo sentimos, esta página no existe.</h3>
    <Link className="notfound__button" to="/">
      espalda
    </Link>
  </div>
);

export default NotFound;
