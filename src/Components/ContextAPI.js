import React, { useContext } from "react";
import { createContext } from "react";

const ThemeContext = createContext("Default");

const Navbar = () => {
  const theme = useContext(ThemeContext);
  console.log("Navbar", theme);
  return (
    <div>
      <h1>Navbar Component</h1>
    </div>
  );
};
const Categories = () => {
  return (
    <div>
      <h1>Categories Component</h1>
      <Product />
    </div>
  );
};
const Product = () => {
  const theme = useContext(ThemeContext);
  console.log("Product", theme);
  return (
    <div>
      <h1>Product Component</h1>
      <div>
        <button
          style={{
            border: theme === "light" ? "3px solid blue" : "none",
          }}
        >
          Theme Button
        </button>
      </div>
    </div>
  );
};

const ContextAPI = () => {
  const theme = "light";

  return (
    <div>
      <h1>ContextAPI Component</h1>
      <ThemeContext.Provider value="Dummy">
        <ThemeContext.Provider value={theme}>
          <Categories />
        </ThemeContext.Provider>
        <Navbar />
      </ThemeContext.Provider>
    </div>
  );
};

export default ContextAPI;
