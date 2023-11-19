import Login from "./pages/login/Login";
import Regester from "./pages/regester/Regester";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserRouter ,  RouterProvider,} from "react-router-dom";
import Navbar  from "./components/navbar/Navbar";
import Leftbar from "./components/leftbar/Leftbar";
import Rightbar from "./components/rightbar/Rightbar";
import Home from "./pages/home/Home"; 
import Profile from "./pages/profile/Profile";
import { Outlet } from 'react-router-dom';


function App() {
  const Layout = () => {
      return (
        <div>
         <Navbar/>
         <div style={{ display: "flex" }}>
          <Leftbar/>
          <Outlet/>
          <Rightbar/>
         </div>
        </div>
      );
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/profile/:id",
          element: <Profile/>,
        }
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/regester",
      element: <Regester/>,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
