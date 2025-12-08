import { NavLink } from "react-router-dom";

export default function Navbar({ isDark }) {
  const base = "text-[32px] md:text-[40px] transition-all";
  const inactive = isDark
    ? "text-white hover:text-gray-400"
    : "text-black hover:text-gray-600";
  const activeCls = isDark
    ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
    : "text-blue-600 border-b-2 border-blue-600 pb-1";

  const linkClass = ({ isActive }) =>
    `${base} ${isActive ? activeCls : inactive}`;

  return (
    <div>
      <nav className="flex items-center justify-center">
        <ul className="flex justify-between gap-16">
          <li>
            <NavLink to="/" className={linkClass} end>
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className={linkClass}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={linkClass}>
              Blogs
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
