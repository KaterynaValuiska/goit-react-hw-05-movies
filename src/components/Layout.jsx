import { Outlet, NavLink } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink> {}
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
