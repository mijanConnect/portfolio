import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ isDark, onToggleDark }) {
  const [isOpen, setIsOpen] = useState(false);

  const base = "text-lg md:text-2xl font-semibold transition-all";
  const inactive = isDark
    ? "text-white hover:text-gray-300"
    : "text-gray-900 hover:text-gray-600";
  const activeCls = isDark
    ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
    : "text-blue-600 border-b-2 border-blue-600 pb-1";

  const linkClass = ({ isActive }) =>
    `${base} ${isActive ? activeCls : inactive}`;

  const links = [
    { to: "/", label: "About Me", end: true },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/contact", label: "Contact" },
    { to: "/blog", label: "Blogs" },
  ];

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  return (
    <nav className="w-full">
      <div className="relative">
        {/* Mobile header with toggle, social links, and hamburger */}
        <div
          className={`md:hidden flex items-center justify-between py-4 ${
            isOpen ? "mb-4" : ""
          }`}
        >
          {/* Theme Toggle - Left side */}
          <button
            onClick={onToggleDark}
            className={`inline-flex items-center justify-center rounded-md p-2 transition-colors ${
              isDark
                ? "text-white hover:bg-gray-800"
                : "text-gray-900 hover:bg-gray-200"
            }`}
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <i className="fa-solid fa-moon text-xl" />
            ) : (
              <i className="fa-solid fa-sun text-xl" />
            )}
          </button>

          {/* Social Links - Center (always show) */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/mijanConnect"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className={`text-xl transition-all ${
                isDark
                  ? "text-white hover:text-yellow-400"
                  : "text-gray-900 hover:text-blue-600"
              }`}
            >
              <i className="fa-brands fa-linkedin" />
            </a>
            <a
              href="https://github.com/mijanConnect"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className={`text-xl transition-all ${
                isDark
                  ? "text-white hover:text-yellow-400"
                  : "text-gray-900 hover:text-blue-600"
              }`}
            >
              <i className="fa-brands fa-github" />
            </a>
            <a
              href="mailto:mijan.connect@gmail.com"
              aria-label="Email"
              className={`text-xl transition-all ${
                isDark
                  ? "text-white hover:text-yellow-400"
                  : "text-gray-900 hover:text-blue-600"
              }`}
            >
              <i className="fa-solid fa-envelope" />
            </a>
          </div>

          {/* Hamburger button - Right side */}
          <button
            onClick={handleToggle}
            className={`inline-flex items-center justify-center rounded-md p-2 transition-colors ${
              isDark
                ? "text-white hover:bg-gray-800"
                : "text-gray-900 hover:bg-gray-200"
            }`}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <i className="fa-solid fa-xmark text-xl" />
            ) : (
              <i className="fa-solid fa-bars text-xl" />
            )}
          </button>
        </div>

        {/* Navigation menu */}
        <ul
          className={`flex flex-col md:flex-row md:items-center md:justify-center gap-6 md:gap-12 py-4 md:py-0 ${
            isOpen ? "flex" : "hidden"
          } md:flex`}
        >
          {links.map((link) => (
            <li key={link.to} onClick={handleClose}>
              <NavLink to={link.to} end={link.end} className={linkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
