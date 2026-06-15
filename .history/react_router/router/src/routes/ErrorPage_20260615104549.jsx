import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log
  return <div>ErrorPage</div>;
};

export default ErrorPage;
