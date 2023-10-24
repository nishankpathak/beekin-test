import {Link} from "react-router-dom";

export default function NotFound() {
  return (
    <div className="d-flex justify-content-center p-4 flex-column text-center">
      <h1 className="m-5" style={{ fontSize: "5rem", color: "lightblue" }}>
        404
      </h1>
      <h3 className="m-3">The Page You're looking for is not found :(</h3>
      <p>
        <Link to="/">Click Here</Link> to get back to home page
      </p>
    </div>
  );
}
