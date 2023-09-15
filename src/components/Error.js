import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h1>Opps!!!</h1>
      <p>Something went wronge</p>
      <p>{error.status}</p>
    </>
  );
};

export default Error;
