import { useState } from "react";

export default function Navbar({ isDark }) {
  const [active, setActive] = useState("about");
  const base = "text-[40px] transition-all";
  const inactive = isDark ? "text-white hover:text-gray-400" : "text-black hover:text-gray-600";
  const activeCls = isDark ? "text-yellow-400 border-b-2 border-yellow-400 pb-1" : "text-blue-600 border-b-2 border-blue-600 pb-1";

  const handleClick = (e, key) => {
    e.preventDefault();
    setActive(key);
  };

  return (
    <div>
      <nav className="flex items-center justify-center">
        <ul className="flex justify-between gap-16">
          <li>
            <a
              href="#about"
              onClick={(e) => handleClick(e, "about")}
              className={`${base} ${active === "about" ? activeCls : inactive}`}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={(e) => handleClick(e, "portfolio")}
              className={`${base} ${active === "portfolio" ? activeCls : inactive}`}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleClick(e, "contact")}
              className={`${base} ${active === "contact" ? activeCls : inactive}`}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
