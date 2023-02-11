//Layout

import { Outlet, Link } from "react-router-dom";

const Layout = () => (
  <div className="text-center my-5">
    <nav>
      <p className="lead">
        <Link to="/">Home</Link> |
        <Link to="/jayphotography">Jay Photography</Link> |
        <Link to="/jayphotography2">Jay Photography 2</Link> |
      </p>
    </nav>
    <hr></hr>
    <Outlet />
    <hr></hr>
  </div>
);

export default Layout;