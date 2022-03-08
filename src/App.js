import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Posts from "./components/Posts/Posts";
import Post from "./components/Post/Post";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PrivateRouteOutlet from "./components/PrivateRoute/PrivateRouteOutlet";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/home/*" element={<Home />}>
          <Route path="details" element={<p>Hello People This is HomePage Background Images</p>}></Route>
        </Route>

        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/posts/:postId" element={<Post />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>

        {/* private route way-1 */}
        {/* <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }

        ></Route> */}

        {/* PrivateRoute Way -2(nested Route) */}
        <Route path="/*" element={<PrivateRouteOutlet />}>
          <Route path="dashboard" element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
