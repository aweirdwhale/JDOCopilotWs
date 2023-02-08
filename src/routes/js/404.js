import { useRouteError } from "react-router-dom";
import '../css/404.css'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div class="error-page">
          <h3>404 :</h3>
          <p>vous êtes perdus</p>
          <br />
          <a href="/">Retournez sur vos pas</a>
        </div>
  );
}