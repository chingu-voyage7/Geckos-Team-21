import React from "react";
import Header from "./Header";

function NotFound(props) {
  const msg = props.message;

  return (
    <div>
      <Header />

      <div id="not-found">{msg ? <p>{msg}</p> : <p>Page is not Found</p>}</div>
    </div>
  );
}

export default NotFound;
