import axios from "axios";

export const newBooking =
  (carBooked, bookedSlot, totalHours, totalAmount, token) =>
  async (dispatch) => {
    try {
      dispatch({ type: "newbookingRequest" });
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        "/myapp/booking/new",

        {
          carBooked,
          bookedSlot,
          totalHours,
          totalAmount,
          token,
        },
        config
      );
      dispatch({ type: "newbookingSuccess", payload: data.bookingDetails });
      alert("Booking success");
    } catch (error) {
      dispatch({
        type: "newbookingFailure",
        payload: error.response.data.message,
      });
      alert(error.response.data.message);
    }
  };
export const getParticularBooking = () => async(dispatch) => {
  try {
    dispatch({ type: "particularBookingRequest" });
    const {data} = await axios.get("/myapp/me/bookings");
    dispatch({type:"particularBookingSuccess",payload:data.allBookings})
  } catch (error) {
    dispatch({type:"particularBookingSuccess",payload:error.response.data.message})
  }
};
export const clearError = () => (dispatch) => {
  dispatch({ type: "clearError" });
};
