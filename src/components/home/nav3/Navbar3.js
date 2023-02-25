import React from "react";
import "./nav3.css";

class Navbar3 extends React.Component {
  render() {
    return (
      <nav>
        <div className="brand">
          <a href="/">Corano</a>
        </div>
        <ul>
          <li>
            <a href="/">Home</a>
            <ul>
              <li>
                <a href="#">Option 1</a>
              </li>
              <li>
                <a href="#">Option 2</a>
              </li>
              <li>
                <a href="#">Option 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Dropdown</a>
            <ul>
              <li>
                <a href="#">Option 1</a>
              </li>
              <li>
                <a href="#">Option 2</a>
              </li>
              <li>
                <a href="#">Option 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <form className="search">
              <input type="text" placeholder="Search" />
              <button type="submit">Search</button>
            </form>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar3;
