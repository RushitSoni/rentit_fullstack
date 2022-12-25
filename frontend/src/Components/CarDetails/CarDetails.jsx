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
import { DatePicker, ConfigProvider, Modal, Button } from "antd";
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

  //
  const [size, setSize] = useState("large");
  const [load, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  //
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
  // const handleBooking = () => {
  //   dispatch(newBooking(params.id, bookedSlot, totalHours, totalHours * rent));
  //   setfrom("");
  //   setto("");
  //   settotalHours("");
  //   setavailibility(true);
  // };
  const onToken = (token) => {
    // console.log(token);
    dispatch(
      newBooking(params.id, bookedSlot, totalHours, totalHours * rent, token)
    );
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
          <div
            className="car-details"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <div style={{ padding: "2vmax" }}>
              <img src={carimg} alt="" srcset="" className="car-img" />
            </div>
            <div
              style={{
                padding: "2vmax",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <h1 className="car-title" style={{ fontSize: "2.1vmax" }}>
                {car && car.title}
              </h1>
              <p className="car-dis" style={{ fontSize: "1.2vmax" }}>
                {car && car.description}
              </p>
              <div
                className="car-icon"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  width: "90%",
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
                  <MdSensors color="#222831" size="1.5em" />
                  {car && car.features.parkingSensor}
                </div>
              </div>
              <h3 className="car-rent" style={{ fontSize: "1.5vmax" }}>
                ₹{rent}/hr
              </h3>
            </div>
          </div>

          <div className="car-date">
            <div className="car-date-text">Select your journey</div>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#3591ca",
                },
              }}
            >
              <RangePicker
                className="car-range-picker"
                showTime
                format="DD/MM/YYYY HH:mm"
                onChange={selectedtimeSlots}
              />
            </ConfigProvider>
            <button onClick={showModal} className="car-book-btn">
              BOOK NOW
            </button>
            <br />
            {from && to && (
              <>
                {/* <button onClick={handleAvailibility}>
                  Check for Availibility
                </button> */}
                {availibility && availibility ? (
                  <Modal
                    className="car-modal"
                    style={{}}
                    open={open}
                    title="RentIt"
                    onOk={handleOk}
                    onCancel={handleCancel}
                    width={400}
                    bodyStyle={{
                      padding: "20px",
                      textAlign: "center",
                      fontStyle: "oblique",
                      fontFamily: "fantasy",
                    }}
                    centered
                    maskStyle={{
                      background: "rgba(0,0,0,0.56)",
                      backdropFilter: " blur(8px)",
                    }}
                    footer={[
                      <Button key="back" onClick={handleCancel} size={size}>
                        Return
                      </Button>,
                      <Button size={size}>
                        {/* <Link
                            
                            onClick={handleBooking}
                          >
                            DONE
                          </Link> */}

                        <StripeCheckout
                          token={onToken}
                          currency="inr"
                          amount={totalHours * rent * 100}
                          stripeKey="pk_test_51MD4fISAnNDrfpjkKm2ORcKYxxnwzKF0wW8rWukzWaGzLOAXGTlnF7ktZH8Cwz31X4el9BrYvmbZJAOWaSM1JJOP00wgOCnCqT"
                        >
                          <Link>Book Now</Link>
                        </StripeCheckout>
                      </Button>,
                    ]}
                  >
                    <div className="car-book-details">
                      <h4 style={{ fontWeight: "600" }}>
                        Total Hours: {totalHours}
                      </h4>
                      <h4 style={{ fontWeight: "600" }}>
                        Total Amount: {totalHours * rent} Rs
                      </h4>
                      {/* <Link className="car-book-btn" onClick={handleBooking}>
                        Book Now
                      </Link> */}
                    </div>
                  </Modal>
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
