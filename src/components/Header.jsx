import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/error-boundary-basic">Error boundary basic</NavLink>
      <NavLink to="/error-boundary-nested">Error boundary nested</NavLink>
      <NavLink to="/suspense-basic">Suspense Basic</NavLink>
      <NavLink to="/automatic-reset">Automatic Reset</NavLink>
    </nav>
  );
}

export default Header;
