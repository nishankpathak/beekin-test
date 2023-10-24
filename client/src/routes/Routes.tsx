import {Route, Routes} from "react-router-dom";
import NotFound from "../components/notFound";
import UserLogin from "../components/userlogin";

export default function Routers() {
  return(
  <Routes>
    <Route path="/login" element={<UserLogin />} />
    <Route path="/" element={<PrivateRoute />} />
    <Route path="*" element={<NotFound />} />
  </Routes>);
}
function PrivateRoute() {
  //check whether user is logged in or not. and return a component to render
  return <></>
}
