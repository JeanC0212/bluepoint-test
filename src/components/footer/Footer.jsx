import React, { useState } from "react";
import { Link } from "wouter";
import "./Footer.css"

export default function Footer() {
  const [links, setLinks] = useState([
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Contact Us", path: "/contact-us" },
    { id: 3, title: "Home", path: "/" },
  ]);

  return (
    <div className="footer">
      <div className="links">
        {links.map((link) => (
          <Link href={link.path}>
            <a>{link.title}</a>
          </Link>
        ))}
      </div>

      <div className="copy">© 2021 bluepoint2</div>
    </div>
  );
}
