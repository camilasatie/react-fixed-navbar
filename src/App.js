import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [navbar, setNavbar] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY >= 300) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackgroundColor);

  return (
    <>
      <header>
        <h1>Welcome</h1>
      </header>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </nav>
      <main className="main">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </main>
    </>
  );
}
