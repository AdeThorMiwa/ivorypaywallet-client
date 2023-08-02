import { useRouteError } from "react-router-dom";

type RouteError = {
  statusText: string;
  message: string;
};

export default function ErrorPage() {
  const error = useRouteError() as RouteError;

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
