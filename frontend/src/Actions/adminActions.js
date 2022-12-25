import axios from "axios";

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllUsersRequest" });
    const { data } = await axios.get("/myapp/admin/users");
    dispatch({ type: "getAllUsersSuccess", payload: data.allUsers });
  } catch (error) {
    dispatch({
      type: "getAllUsersFailure",
      payload: error.response.data.message,
    });
  }
};

export const getAllBookings = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllBookingsRequest" });
    const { data } = await axios.get("/myapp/admin/bookings");
    dispatch({ type: "getAllBookingsSuccess", payload: data.allBookings });
  } catch (error) {
    dispatch({
      type: "getAllBookingsFailure",
      payload: error.response.data.message,
    });
  }
};

export const getAllCarsAdmin = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllCarsAdminRequest" });
    const { data } = await axios.get("/myapp/cars");
    dispatch({ type: "getAllCarsAdminSuccess", payload: data.cars });
  } catch (error) {
    dispatch({
      type: "getAllCarsAdminFailure",
      payload: error.response.data.message,
    });
  }
};

export const deleteCar = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteCarRequest" });
    const { data } = await axios.delete(`/myapp/admin/car/${id}`);
    dispatch({ type: "deleteCarSuccess", payload: data.message });
    alert("Car Deleted Successfully");
  } catch (error) {
    dispatch({
      type: "deleteCarFailure",
      payload: error.response.data.message,
    });
  }
};

export const deleteBooking = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteBookingRequest" });
    const { data } = await axios.delete(`/myapp/admin/booking/${id}`);
    dispatch({ type: "deleteBookingSuccess", payload: data.message });
    alert("Booking Deleted Successfully");
  } catch (error) {
    dispatch({
      type: "deleteBookingFailure",
      payload: error.response.data.message,
    });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteUserRequest" });
    const { data } = await axios.delete(`/myapp/admin/user/${id}`);
    dispatch({ type: "deleteUserSuccess", payload: data.message });
    alert("User Deleted Successfully");
  } catch (error) {
    dispatch({
      type: "deleteUserFailure",
      payload: error.response.data.message,
    });
  }
};

export const createCar =
  (
    title,
    description,
    rent,
    noPlate,
    company,
    model,
    colour,
    seats,
    gear,
    fuelType,
    gps,
    usb,
    radio,
    parkingSensor
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: "createCarRequest" });
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        "/myapp/admin/car/new",
        {
          title,
          description,
          rent,
          noPlate,
          company,
          model,
          features: {
            colour,
            seats,
            gear,
            fuelType,
            gps,
            usb,
            radio,
            parkingSensor,
          },
        },
        config
      );
      dispatch({ type: "createCarSuccess", payload: data.car });
    } catch (error) {
      dispatch({
        type: "createCarFailure",
        payload: error.response.data.message,
      });
    }
  };
