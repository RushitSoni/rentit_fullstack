import React from "react";
import "./Card.css";
import { TbManualGearbox } from "react-icons/tb";
import { FaUsers} from "react-icons/fa";
import { Link } from "react-router-dom";
const Card = ({cars,isFeatured}) => {
  // console.log(title);
  return (
    <Link to={`/car/${cars._id}`}>
    <div className={isFeatured ? "main-contanier-f" : "main-contanier"}>
      <div className="card">
        <div className="card-nav">
          <div className="card-heading">
            <h5>{cars.title}</h5>
          </div>
        </div>
        <div className="main-content">
          {/* <img
            src="https://cdn.vox-cdn.com/thumbor/HiwWwuQ_03ZW3m2BIcb1NtYPlcw=/0x0:2870x2116/1200x800/filters:focal(1203x969:1661x1427)/cdn.vox-cdn.com/uploads/chorus_image/image/50272225/150028_car.0.jpg"
            alt=""
          /> */}
          <img
            src={cars.url}
            alt=""
          />
        </div>
        <div className="card-bottom-nav">
          <div className="car-info">
            <h3 className="car-space">
                <FaUsers className="car-icon"/>
                {cars.features.seats}
            </h3>
            <h5 className="car-gear">
              <TbManualGearbox className="car-icon" />
             {cars.features.gear}
            </h5>
           
          </div>
          <div className="car-price">
              {/* <button onClick={setExpanded}>146$/day</button> */}
              <button>₹{cars.rent}/hr</button>
            </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Card;
