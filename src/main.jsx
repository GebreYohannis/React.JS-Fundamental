import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import LoginForm from "./components/Forms/LoginForm";
import NavBar from "./components/Forms/NavBar";
import Message from "./components/Forms/Message";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.Fragment>
      <NavBar />
      <LoginForm />

    </React.Fragment>
  </React.StrictMode>
);
