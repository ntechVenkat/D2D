import React from "react";
import { Link, Outlet } from "react-router-dom";

export const ContactUs = () => {
  return (
    <div>
      ContactUs Component
      <div>
        <button>
          <Link to="personal">Personal</Link>
        </button>
        <button>
          <Link to="proffesional">Proffesional</Link>
        </button>
      </div>
      <Outlet />
    </div>
  );
};
// export default ContactUs;

export const Personal = () => {
  return <div>Personal Component</div>;
};

export const Proffesional = () => {
  return <div>Proffesional Component</div>;
};
