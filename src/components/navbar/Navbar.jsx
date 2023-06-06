import React, { useRef } from "react";
import { Link } from "wouter";
import "./Navbar.css"

export const Navbar = () => {

	const menu = useRef()

	const closeNav = () => {
		console.log(menu.current);
		menu.current.classList.remove("active");
		menu.current.classList.add("close");
	}

	const openNav = () => {
		menu.current.classList.add("active");
		menu.current.classList.remove("close");
	}

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <Link href="/home"> <img src="https://static.wixstatic.com/media/c86aa8_b9d1a19b6fa148129b39180b7518a3ef~mv2.png/v1/fill/w_210,h_41,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bluepoint2-Logo-Solid-DrkBlue.png" alt="" /></Link>
      </a>
      
	  <button
		
		onClick={openNav}

        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav" ref={menu}>
        <ul className="navbar-nav">
		<li className="nav-item active closeIcon" onClick={closeNav}>
            
              <a className="nav-link " href="#">
                X
              </a>
            
          </li>

		  <li className="nav-item active">
            <Link href="/home">
              <a className="nav-link" href="#">
                Home
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact-us">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </Link>
          </li>
         
        </ul>
      </div>
    </nav>
  );
};
