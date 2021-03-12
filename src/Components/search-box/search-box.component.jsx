import React from "react";

import "./search-box.style.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    //We will get the VALUE from searchfield.
    // (e) is just a random variable we use in this case to get the value from searchfield
    onChange={handleChange}
  ></input>
);
