import React from "react";
import "./New.css";
import "../Sidebar/Sidebar.css";
import "../Dashboard.css";

// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Switch from '@material-ui/core/Switch';
import { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import SideBar from "../Sidebar/Sidebar";
import create_car from "../../../images/create_car.png";
import { useDispatch } from "react-redux";
import { createCar } from "../../../Actions/adminActions";

const New = () => {
  const dispatch = useDispatch();
  const [carDetails, setcarDetails] = React.useState({
    title: "",
    description: "",
    rent: "",
    noPlate: "",
    company: "",
    model: "",
    colour: "",
    seats: "",
    gear: "",
    fuelType: "",
    gps: "",
    usb: "",
    radio: "",
    parkingSensor: "",
  });

  // Change State Function
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setcarDetails((precarDetails) => {
      return {
        ...precarDetails,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
 dispatch(createCar(carDetails.title,carDetails.description,carDetails.rent,carDetails.noPlate,carDetails.company,carDetails.model,carDetails.colour,carDetails.seats,carDetails.gear,carDetails.fuelType,carDetails.gps,carDetails.usb,carDetails.radio,carDetails.parkingSensor))
  };
  return (
    <div>
      <div style={{ width: "100%", backgroundColor: "#222831" }}>
        <Navbar />
      </div>

      <div className="car-content-div">
        <div className="sidebar-container">
          <SideBar />
        </div>

        <div className="img-container">
          <div className="heading">
            <h2>Create A New Car</h2>
          </div>
          <img className="create-img" src={create_car} alt="Car-img" />
        </div>

        <div className="create-info-div">
          <form
            className="create-car-form"
            onSubmit={handleSubmit}
            method="post"
          >
            <div className="new-car-data">
              <input
                type="text"
                name="title"
                // value={"title"}
                value={carDetails.title}
                onChange={changeHandler}
                className="car-input"
                placeholder="Title"
                required
              />
            </div>

            <div className="new-car-data">
              <input
                type="text"
                name="rent"
                // value={"rent"}
                value={carDetails.rent}
                onChange={changeHandler}
                className="car-input"
                placeholder="Rent"
                required
              />
            </div>

            {/* <div className="new-car-data">
              Featured:
             True <input
                type="radio"
                name="feature"
                // value={"rent"}
                value="true"
                className=""
                placeholder="Featured"
                required
              />
              False <input
                type="radio"
                name="feature"
                // value={"rent"}
                value="true"
                className=""
                placeholder="Featured"
                required
              />
            </div> */}

            <div className="new-car-data">
              <textarea
                placeholder="Description"
                name="description"
                value={carDetails.description}
                onChange={changeHandler}
                className="car-input car-input-area"
              ></textarea>
            </div>

            <div className="joint-div">
              <div className="new-car-feat-data">
                <select
                  name="company"
                  value={carDetails.company}
                  onChange={changeHandler}
                  className="car-company-option"
                >
                  <option className="car-company" value="company">
                    Company
                  </option>
                  <option className="car-company" value="Tata">
                    Tata
                  </option>
                  <option className="car-company" value="Hyundai">
                    Hyundai
                  </option>
                  <option className="car-company" value="Maruti Suzuki">
                    Maruti Suzuki
                  </option>
                  <option className="car-company" value="Toyota">
                    Toyota
                  </option>
                  <option className="car-company" value="Mahindra">
                    Mahindra
                  </option>
                </select>
              </div>

              <div className="new-car-feat-data">
                <input
                  type="text"
                  name="noPlate"
                  value={carDetails.noPlate}
                  onChange={changeHandler}
                  className="joint-div-car-input"
                  placeholder="No Plate"
                  required
                />
              </div>

              <div className="new-car-feat-data">
                <input
                  type="text"
                  name="model"
                  value={carDetails.model}
                  onChange={changeHandler}
                  className="joint-div-car-input"
                  placeholder="Model"
                  required
                />
              </div>

              <div className="new-car-feat-data">
                <input
                  type="text"
                  name="colour"
                  value={carDetails.colour}
                  onChange={changeHandler}
                  className="joint-div-car-input"
                  placeholder="Colour"
                  required
                />
              </div>
              <div className="new-car-feat-data">
                <input
                  type="text"
                  name="seats"
                  value={carDetails.seats}
                  onChange={changeHandler}
                  className="joint-div-car-input"
                  placeholder="Seats"
                  required
                />
              </div>
              <div className="new-car-feat-data">
                <input
                  type="text"
                  name="gear"
                  value={carDetails.gear}
                  onChange={changeHandler}
                  className="joint-div-car-input"
                  placeholder="Gear"
                  required
                />
              </div>

              <div className="new-car-feat-data">
                <input
                  type="text"
                  name="fuelType"
                  value={carDetails.fuelType}
                  onChange={changeHandler}
                  className="joint-div-car-input"
                  placeholder="Fuel Type"
                  required
                />
              </div>

              {/* <div className="new-car-feat-data">
                <input
                  type="text"
                  name="airConditioner"
                  // value={"airConditioner"}
                  className="joint-div-car-input"
                  placeholder="Air Conditioner"
                  required
                />
              </div> */}

              <div className="new-car-feat-data">
                <input
                  type="text"
                  name="gps"
                  value={carDetails.gps}
                  onChange={changeHandler}
                  className="joint-div-car-input"
                  placeholder="GPS"
                  required
                />
              </div>

              <div className="new-car-feat-data">
                <input
                  type="text"
                  name="usb"
                  value={carDetails.usb}
                  onChange={changeHandler}
                  className="joint-div-car-input"
                  placeholder="USB"
                  required
                />
              </div>

              <div className="new-car-feat-data">
                <input
                  type="text"
                  name="radio"
                  value={carDetails.radio}
                  onChange={changeHandler}
                  className="joint-div-car-input"
                  placeholder="Radio"
                  required
                />
              </div>

              <div className="new-car-feat-data">
                <input
                  type="text"
                  name="parkingSensor"
                  value={carDetails.parkingSensor}
                  onChange={changeHandler}
                  className="joint-div-car-input"
                  placeholder="Parking Sensor"
                  required
                />
              </div>
            </div>

            <div>
              <button type="submit" className="create-btn">
                Create A Car
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default New;
