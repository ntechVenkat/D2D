import React from "react";
import "./App.css";
// import CBC from "./CBC.js";
// import { FBC } from "./FBC.js";
// import FBCForm from "./FBCForm.js";
// import CBCForm from "./CBCForm.js";
import FBCLifeCycleHook from "./FBCLifeCycleHook.js";

const App = () => {
  return (
    <div>
      {/* <CBC value="by TVS" />
      <FBC topic="React" /> */}
      {/* <FBCForm /> */}
      {/* <CBCForm /> */}
      <FBCLifeCycleHook />
    </div>
  );
};
export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
