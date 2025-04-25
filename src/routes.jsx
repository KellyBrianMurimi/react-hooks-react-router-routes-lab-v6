 import Home from "./pages/Home";
 import Movie from "./pages/Movie";
 import Actors from "./pages/Actors";
 import Directors from "./pages/Directors";


const routes = [
  { path: "/", element: <Home /> },
  { path: "/actors", element: <Actors /> },
  { path: "/directors", element: <Directors /> },
  { path: "/movie/:id", element: <Movie /> }
];

export default routes;
