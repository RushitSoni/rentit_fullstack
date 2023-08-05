import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Components/LandingPage/Landing";
import Home from "./Components/Home/Home";
import Cars from "./Components/Cars/Cars";
import Contact from "./Components/Contact/Contact";
import { MainContainer } from "./Components/Login/MainContainer";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./Actions/userActions";
import Service from "./Components/Services/Service";
import CarDetails from "./Components/CarDetails/CarDetails";
import Dashboard from "./Components/Admin/Dashboard";
import UserList from "./Components/Admin/UserList/UserList";
import CarList from "./Components/Admin/CarList/CarList";
import BookingList from "./Components/Admin/BookingList/BookingList";
import EditProfile from "./Components/MyProfile/EditProfile";
import About from "./Components/AboutUs/About";

import Bookings from "./Components/Bookings/Bookings";

import New from "./Components/Admin/Car/New";

function App() {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const [container, setContainer] = useState("logined");
  const [logoClass, setLogoClass] = useState("logo blue");

  const changeContainerState = () => {
    if (container === "logined") {
      setContainer("registered");
      setLogoClass("logo");
    } else if (container === "registered") {
      setContainer("logined");
      setLogoClass("logo blue");
    }

    if (container === "myprofile") {
      setContainer("editprofile");
    }
  };
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      {/* <Navbar/> */}
      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/cars" element={<Cars />}></Route>
        <Route
          exact
          path="/login"
          element={
            <MainContainer
              container={container}
              changeContainerState={changeContainerState}
              logoClass={logoClass}
            />
          }
        ></Route>

        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/services" element={<Service />}></Route>
        <Route exact path="/car/:id" element={<CarDetails />}></Route>
        <Route
          exact
          path="/myprofile"
          element={
            isAuthenticated ? (
              <EditProfile />
            ) : (
              <MainContainer
                container={container}
                changeContainerState={changeContainerState}
                logoClass={logoClass}
              />
            )
          }
        ></Route>
        <Route
          exact
          path="/mybookings"
          element={
            isAuthenticated ? (
              <Bookings />
            ) : (
              <MainContainer
                container={container}
                changeContainerState={changeContainerState}
                logoClass={logoClass}
              />
            )
          }
        ></Route>
        <Route
          exact
          path="/admin/dashboard"
          element={
            isAuthenticated && user && user.role === "admin" ? (
              <Dashboard />
            ) : (
              <Landing />
            )
          }
        ></Route>
        <Route
          exact
          path="/admin/dashboard/users"
          element={
            isAuthenticated && user && user.role === "admin" ? (
              <UserList />
            ) : (
              <Landing />
            )
          }
        ></Route>
        <Route
          exact
          path="/admin/dashboard/cars"
          element={
            isAuthenticated && user && user.role === "admin" ? (
              <CarList />
            ) : (
              <Landing />
            )
          }
        ></Route>

        <Route
          exact
          path="/admin/dashboard/car/new"
          element={
            isAuthenticated && user && user.role === "admin" ? (
              <New />
            ) : (
              <Landing />
            )
          }
        ></Route>

        <Route
          exact
          path="/admin/dashboard/bookings"
          element={
            isAuthenticated && user && user.role === "admin" ? (
              <BookingList />
            ) : (
              <Landing />
            )
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
