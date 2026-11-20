import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="container py-5 text-center">
      <h1>404 — Page Not Found</h1>
      <Link className="btn btn-primary mt-3" to="/">
        Go Home
      </Link>
    </div>
  );
}
