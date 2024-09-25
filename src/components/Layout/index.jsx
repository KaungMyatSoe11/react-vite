import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className="h-16 text-lg bg-gray-600 text-white"> header</header>
      <Outlet />
      <footer className="h-16 text-lg bg-gray-600 text-white"> footer</footer>
    </>
  );
};

export default Layout;
