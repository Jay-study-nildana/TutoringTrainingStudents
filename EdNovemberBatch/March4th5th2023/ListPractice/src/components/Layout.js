import { Outlet, Link } from "react-router-dom";
import GitHubFooter from "./GitHubFooter";

const Layout = () => (
  <div className="text-center my-5">
    <nav>
      <p className="lead">
        <Link to="/">Home</Link> |
        {/* <Link to="/passingobjects">Passing Objects</Link> | */}
        {/* <Link to="/input">Input</Link> | */}
        {/* <Link to="/slideshow">Image SlideShow</Link> | */}
        <Link to="/nothing-here">Nothing Here</Link> |
        <Link to="/simplebasiclist">SimpleBasicList</Link> |
        <Link to="/listwithitemcomponent">ListwithItemComponent</Link> |
        <Link to="/listwithaccordion">ListWithAccordion</Link> |
        {/* <Link to="/about">About</Link> | */}
      </p>
    </nav>
    <hr></hr>
    <Outlet />
    <hr></hr>
    <GitHubFooter />
  </div>
);

export default Layout;
