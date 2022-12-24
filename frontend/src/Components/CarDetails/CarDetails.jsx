import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getparticularCar } from "../../Actions/carActions";
import Navbar from "../Navbar/Navbar";
import "./CarDetails.css";
import carimg from "../../images/car-img.png";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { GiGearStickPattern } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { AiFillUsb } from "react-icons/ai";
import { MdSensors } from "react-icons/md";
import moment from "moment";
import { DatePicker } from "antd";
import { useState } from "react";
import { newBooking } from "../../Actions/bookingActions";
import StripeCheckout from "react-stripe-checkout";
const { RangePicker } = DatePicker;
const CarDetails = () => {
  const params = useParams();
  // console.log(params);
  const dispatch = useDispatch();
  const { car, loading } = useSelector((state) => state.cars);
  // const { error,loadingb } = useSelector((state) => state.booking);
  const [from, setfrom] = useState("");
  const [to, setto] = useState("");
  const [totalHours, settotalHours] = useState();
  const [availibility, setavailibility] = useState();

  useEffect(() => {
    dispatch(getparticularCar(params.id));
  }, [dispatch, params.id]);

  const selectedtimeSlots = (values) => {
    setfrom(moment(values[0]).format("MMM DD YYYY HH:mm"));
    setto(moment(values[1]).format("MMM DD YYYY HH:mm"));
    settotalHours(values[1].diff(values[0], "hours"));
    setavailibility(true);

    const sFrom = moment(values[0]);
    const sTo = moment(values[1]);
    if (car.bookedSlot.length === 0) {
      setavailibility(true);
    } else {
      for (const bookedSlot of car.bookedSlot) {
        if (
          sFrom.isBetween(bookedSlot.from, bookedSlot.to) ||
          sTo.isBetween(bookedSlot.from, bookedSlot.to) ||
          moment(bookedSlot.from).isBetween(sFrom, sTo) ||
          moment(bookedSlot.to).isBetween(sFrom, sTo)
        ) {
          setavailibility(false);
        }
      }
    }
  };
  const rent = car && car.rent;
  const bookedSlot = {
    from: from,
    to: to,
  };
  // const handleAvailibility = () => {
  //   if (!availibility) {
  //     alert("Not Available");
  //   } else {
  //     alert("Available");
  //   }
  // };
  const handleBooking = () => {
    dispatch(newBooking(params.id, bookedSlot, totalHours, totalHours * rent));
    setfrom("");
    setto("");
    settotalHours("");
    setavailibility(true);
  };
  const onToken = (token) => {
    // console.log(token);
    dispatch(newBooking(params.id, bookedSlot, totalHours, totalHours * rent,token));
    setfrom("");
    setto("");
    settotalHours("");
    setavailibility(true);
  };
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div style={{ backgroundColor: "#222831" }}>
            <Navbar />
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div style={{ padding: "2vmax" }}>
              <img src={carimg} alt="" srcset="" className="car-img" />
            </div>
            <div
              style={{
                padding: "2vmax",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h1 style={{ fontSize: "2.1vmax" }}>{car && car.title}</h1>
              <h3 style={{ fontSize: "1.5vmax" }}>₹{rent}/hr</h3>
              <p style={{ fontSize: "1.1vmax" }}>{car && car.description}</p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  width: "35%",
                  gap: "1.1vmax",
                }}
              >
                <div style={{ fontSize: "1.2vmax" }}>
                  <MdAirlineSeatReclineExtra color="#222831" size="1.3em" />
                  {car && car.features.seats}
                </div>
                <div style={{ fontSize: "1.2vmax" }}>
                  <GiGearStickPattern color="#222831" size="1.3em" />
                  {car && car.features.gear}
                </div>
                <div style={{ fontSize: "1.2vmax" }}>
                  <GoLocation color="#222831" size="1.3em" />
                  {car && car.features.gps}{" "}
                </div>
                <div style={{ fontSize: "1.2vmax" }}>
                  <AiFillUsb color="#222831" size="1.3em" />
                  {car && car.features.usb}
                </div>
                <div style={{ fontSize: "1.2vmax" }}>
                  <MdSensors color="#222831" size="1.3em" />
                  {car && car.features.parkingSensor}
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <RangePicker
              showTime
              format="DD/MM/YYYY HH:mm"
              onChange={selectedtimeSlots}
            />
            <br />
            {from && to && (
              <>
                {/* <button onClick={handleAvailibility}>
                  Check for Availibility
                </button> */}
                {availibility && availibility ? (
                  <>
                    <h4>Total Hours: {totalHours}</h4>
                    <h4>Total Amount: {totalHours * rent}</h4>

                    <StripeCheckout
                      token={onToken}
                      currency="inr"
                      amount={totalHours*rent*100}
                      stripeKey="pk_test_51MD4fISAnNDrfpjkKm2ORcKYxxnwzKF0wW8rWukzWaGzLOAXGTlnF7ktZH8Cwz31X4el9BrYvmbZJAOWaSM1JJOP00wgOCnCqT"
                    >
                      <Link>Book Now</Link>
                    </StripeCheckout>
                  </>
                ) : (
                  <>
                    <h4>Not Available</h4>
                  </>
                )}
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default CarDetails;
