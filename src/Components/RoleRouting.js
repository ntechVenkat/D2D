import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const USER_TYPE = {
  PUBLIC_USER: "Public User",
  NORMAL_USER: "Normal User",
  ADMIN_USER: "Admin User",
};

let CURRENT_ACTIVE_USER_TYPE = USER_TYPE.PUBLIC_USER;

function AppRouters() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <PublicElement>
              <Home />
            </PublicElement>
          }
        ></Route>
        <Route
          path="/user"
          element={
            <UserElement>
              <User />
            </UserElement>
          }
        ></Route>
        <Route
          path="/admin"
          element={
            <AdminElement>
              <Admin />
            </AdminElement>
          }
        ></Route>
        <Route path="*" element={<div>Page Not Found</div>}></Route>
      </Routes>
    </div>
  );
}

function Home() {
  return <div>Home Page</div>;
}
function User() {
  return <div>User Page</div>;
}
function Admin() {
  return <div>Admin Page</div>;
}

function PublicElement({ children }) {
  return <>{children}</>;
}

function UserElement({ children }) {
  if (
    CURRENT_ACTIVE_USER_TYPE === USER_TYPE.NORMAL_USER ||
    CURRENT_ACTIVE_USER_TYPE === USER_TYPE.ADMIN_USER
  )
    return <>{children}</>;
  else {
    return <div>You don't have the access to this page</div>;
  }
}

function AdminElement({ children }) {
  if (CURRENT_ACTIVE_USER_TYPE === USER_TYPE.ADMIN_USER) return <>{children}</>;
  else {
    return <div>You don't have the access to this page</div>;
  }
}

const RoleRouting = () => {
  return (
    <div>
      You are Logged in as :{" "}
      <span style={{ color: "red" }}>{CURRENT_ACTIVE_USER_TYPE}</span>
      <div
        style={{
          display: "flex",
          gap: 10,
          padding: 5,
          backgroundColor: "blue",
        }}
      >
        <Link style={{ color: "white" }} to="/">
          Home
        </Link>
        {CURRENT_ACTIVE_USER_TYPE === USER_TYPE.NORMAL_USER ||
        CURRENT_ACTIVE_USER_TYPE === USER_TYPE.ADMIN_USER ? (
          <Link style={{ color: "white" }} to="/user">
            User
          </Link>
        ) : null}
        {CURRENT_ACTIVE_USER_TYPE === USER_TYPE.ADMIN_USER ? (
          <Link style={{ color: "white" }} to="/admin">
            Admin
          </Link>
        ) : null}
      </div>
      <AppRouters />
    </div>
  );
};
export default RoleRouting;
