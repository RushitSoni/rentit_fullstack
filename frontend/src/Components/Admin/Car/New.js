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

const New = () => {
  const [myCar, setMyCar] = useState("Company");

  const handleChange = (event) => {
    setMyCar(event.target.value);
  };

  const [state, setState] = React.useState({ status: true });

  // Change State Function
  const handleChange2 = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
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
          <form className="create-car-form">
            <div className="new-car-data">
              <input
                type="text"
                name="title"
                // value={"title"}
                className="car-input"
                placeholder="Title"
                required
              />
            </div>

            <div className="new-car-data">
              <input
                type="number"
                name="rent"
                // value={"rent"}
                className="car-input"
                placeholder="Rent"
                required
              />
            </div>

            <div className="new-car-data">
              <input
                type="text"
                name="feature"
                // value={"rent"}
                className="car-input"
                placeholder="Feature"
                required
              />
            </div>

            <div className="new-car-data">
              <textarea
                placeholder="Description"
                name="description"
                // value={"description"}
                className="car-input car-input-area"
              ></textarea>
            </div>

            <div className="joint-div">
              <div className="new-car-feat-data">
                <select
                  value={myCar}
                  onChange={handleChange}
                  className="car-company-option"
                >
                  <option className="car-company" value="company">
                    Company
                  </option>
                  <option className="car-company" value="Tata">
                    Tata
                  </option>
                  <option className="car-company" value="Hyundia">
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
                  // value={"noPlate"}
                  className="joint-div-car-input"
                  placeholder="No Plate"
                  required
                />
              </div>

              <div className="new-car-feat-data">
                <input
                  type="text"
                  name="model"
                  // value={"model"}
                  className="joint-div-car-input"
                  placeholder="Model"
                  required
                />
              </div>

              <div className="new-car-feat-data">
                <input
                  type="text"
                  name="colour"
                  // value={"colour"}
                  className="joint-div-car-input"
                  placeholder="Colour"
                  required
                />
              </div>

              <div className="new-car-feat-data">
                <input
                  type="text"
                  name="gear"
                  // value={"gear"}
                  className="joint-div-car-input"
                  placeholder="Gear"
                  required
                />
              </div>

              <div className="new-car-feat-data">
                <input
                  type="text"
                  name="fuleType"
                  // value={"fuleType"}
                  className="joint-div-car-input"
                  placeholder="Fule Type"
                  required
                />
              </div>

              <div className="new-car-feat-data">
                <input
                  type="text"
                  name="airConditioner"
                  // value={"airConditioner"}
                  className="joint-div-car-input"
                  placeholder="Air Conditioner"
                  required
                />
              </div>

              <div className="new-car-feat-data">
                <input
                  type="text"
                  name="gps"
                  // value={"airConditioner"}
                  className="joint-div-car-input"
                  placeholder="GPS"
                  required
                />
              </div>

              <div className="new-car-feat-data">
                <input
                  type="text"
                  name="usb"
                  // value={"airConditioner"}
                  className="joint-div-car-input"
                  placeholder="USB"
                  required
                />
              </div>

              <div className="new-car-feat-data">
                <input
                  type="text"
                  name="radio"
                  // value={"airConditioner"}
                  className="joint-div-car-input"
                  placeholder="Radio"
                  required
                />
              </div>

              <div className="new-car-feat-data">
                <input
                  type="text"
                  name="parkingSensor"
                  // value={"airConditioner"}
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
