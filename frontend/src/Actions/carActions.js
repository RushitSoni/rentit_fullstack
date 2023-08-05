import axios from "axios";
import { Button, message, Space } from 'antd';
export const getallCars = () => async (dispatch) => {
  try {
    dispatch({ type: "allcarsRequest" });
    const { data } = await axios.get("/myapp/cars");
    dispatch({ type: "allcarsSuccess", payload: data.cars });
  } catch (error) {
    dispatch({ type: "allcarsFailure", payload: error.message });
  }
};

export const getASCcars = () => async(dispatch) => {
try {
  dispatch({type:"allcarsASCRequest"});
  const {data} = await axios.get("/myapp/cars/sort/ascending");
  dispatch({type:"allcarsASCSuccess",payload:data.cars});
} catch (error) {
  dispatch({type:"allcarsASCFailure",payload:error.message})
}
}

export const getDESCcars = () => async(dispatch) => {
  try {
    dispatch({type:"allcarsDESCRequest"});
    const {data} = await axios.get("/myapp/cars/sort/descending");
    dispatch({type:"allcarsDESCSuccess",payload:data.cars});
  } catch (error) {
    dispatch({type:"allcarsDESCFailure",payload:error.message})
  }
  }

export const getparticularCar = (id) => async(dispatch) => {
try {
  dispatch({type:"particularcarRequest"});
  const {data} = await axios.get(`/myapp/car/${id}`);
  dispatch({type:"particularcarSuccess",payload:data.car});
} catch (error) {
  dispatch({type:"particularcarFailure",payload:error.response.data.message})
}
}

export const getFeaturedCars = () => async(dispatch) => {
try {
  dispatch({type:"featuredcarRequest"});
  const {data} = await axios.get("/myapp/cars?featured=true");
  dispatch({type:"featuredcarSuccess",payload:data.cars})
} catch (error) {
  dispatch({type:"featuredcarFailure",payload:error.response.data.message})
}
}