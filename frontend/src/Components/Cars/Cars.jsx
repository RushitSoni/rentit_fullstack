import React, { useState, useEffect } from "react";
// import { FormControlLabel,Radio, RadioGroup } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { ClimbingBoxLoader } from "react-spinners";
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import "../FilterBox/CheckBox/CheckBox.css";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import Navbar from "../Navbar/Navbar";
import FilterBox from "../FilterBox/FilterBox";
import "../FilterBox/FilterBox.css";
import "../FilterBox/RadioBtn/RadioBtn.css";
import "./Cars.css";
import { useDispatch, useSelector } from "react-redux";
import { getallCars, getASCcars, getDESCcars } from "../../Actions/carActions";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";


const Cars = () => {
  const dispatch = useDispatch();
  const { cars } = useSelector((state) => state.cars);
  const [sort, setsort] = useState("");
  const companies = ["Tata", "Hyundai", "Toyota", "Maruti Suzuki", "Mahindra"];
  useEffect(() => {
    dispatch(getallCars());
  }, [dispatch]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);

  const [checkedItem, setCheckedItem] = useState([]);
  const handleChange = (event) => {
    const index = checkedItem.indexOf(event.target.value);
    console.log(checkedItem);
    if (index === -1) {
      setCheckedItem([...checkedItem, event.target.value]);
    } else {
      setCheckedItem(checkedItem.filter((comp) => comp !== event.target.value));
    }
    console.log(event.target.value);
  };
  const handleSort = (e) => {
    setsort(e.currentTarget.value);
    // console.log(sort);
    if (e.currentTarget.value === "ascending") {
      dispatch(getASCcars());
    } else if (e.currentTarget.value === "descending") {
      dispatch(getDESCcars());
    }
  };
  
  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      primary: {
        main: "#3591ca",
        darker: "#053e85",
      },
      neutral: {
        main: "#ffffff",
        contrastText: "#fff",
      },
    },
  });
  return (
    <>
    
     
      {loading ? (
        <div style={{ height: "100vh", backgroundColor: "black" }}>
        {" "}
        <ClimbingBoxLoader
          color="#36d7b7"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </div>
      ) : (
        <div className="main-container-1">
          {/* <div>
            <Navbar />
          </div> */}
          <div style={{ backgroundColor: "#222831"}}>
        <Navbar />
      </div>
          <div className="car-container">
            {/* <FilterBox /> */}
            <div className="FilterBox">
              <div className="Heading">FILTER</div>
              <ThemeProvider theme={theme}>
                <div className="checkbox-container">
                  <FormControl>
                    <FormLabel className="sub-heading" color="neutral">
                      Companies
                    </FormLabel>
                    <div className="divider"></div>
                    <FormGroup>
                      {companies &&
                        companies.map((company) => {
                          return (
                            <FormControlLabel
                              label={company}
                              value={company}
                              control={
                                <Checkbox
                                  size="large"
                                  checked={checkedItem.includes(company)}
                                  onChange={handleChange}
                                />
                              }
                            />
                          );
                        })}
                    </FormGroup>
                  </FormControl>
                </div>
              </ThemeProvider>
              <div className="radio-container">
                <ThemeProvider theme={theme}>
                  <FormControl>
                    <FormLabel
                      id="radio-buttons-group-label"
                      className="sub-heading"
                      color="neutral"
                    >
                      Price
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="radio-buttons-group-label"
                      // defaultValue="High-Low"
                      name="controlled-radio-buttons-group"
                      // onChange={handleSort}
                      // value = {sort}
                    >
                      <FormControlLabel
                        value="descending"
                        control={
                          <Radio
                            checked={sort === "descending"}
                            onChange={handleSort}
                          />
                        }
                        label="High-Low"
                      />
                      <FormControlLabel
                        value="ascending"
                        control={
                          <Radio
                            checked={sort === "ascending"}
                            onChange={handleSort}
                          />
                        }
                        label="Low-High"
                      />
                    </RadioGroup>
                  </FormControl>
                </ThemeProvider>
              </div>
            </div>
            <div className="card-container">
              {cars &&
                cars.map((car) => {
                  return <Card key={car._id} cars={car} isFeatured={false} />;
                  // return <Link to={`/car/${car._id}`}><Card key={car._id} cars={car} /></Link>
                })}
            </div>
          </div>
        </div>
        
      )}

      <Footer/>
    </>
  );
};

export default Cars;
