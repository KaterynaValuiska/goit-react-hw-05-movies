import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import './styles.css';
import { Loader } from './Loader';

export const Layout = () => {
  return (
    <div className="Layout">
      <nav className="LayoutNav">
        <NavLink to="/">Home</NavLink> {}
        <NavLink to="/movies">Movies</NavLink>
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg"
          alt=""
          width={200}
        />
      </nav>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
