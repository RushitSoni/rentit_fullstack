import React from "react";
import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { FormControl, FormLabel, FormGroup } from "@mui/material";
import { useState } from "react";
import "./CheckBox.css";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

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

const CheckBox = () => {
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
  return (
    <ThemeProvider theme={theme}>
      <div className="checkbox-container">
        <FormControl>
          <FormLabel className="sub-heading" color="neutral">Companies </FormLabel>
          <div className="divider"></div>
          <FormGroup>
            <FormControlLabel
              label="Tata"
              value="Tata"
              
              control={
                <Checkbox
                  size="large"
                  checked={checkedItem.includes("Tata")}
                  onChange={handleChange}
                />
              }
            />

            <FormControlLabel
              label="Toyota"
              value="Toyota"
              
              control={
                <Checkbox
                  size="large"
                  checked={checkedItem.includes("Toyota")}
                  onChange={handleChange}
                />
              }
            />

            <FormControlLabel
              className="form-label"
              label="Nexa"
              value="Nexa"
              
              control={
                <Checkbox
                  size="large"
                  color="primary"
                  checked={checkedItem.includes("Nexa")}
                  onChange={handleChange}
                />
              }
            />
          </FormGroup>
        </FormControl>


        <FormControl>
          <FormLabel className="sub-heading" color="neutral">Gears</FormLabel>
          <div className="divider"></div>
          <FormGroup>
            <FormControlLabel
              label="Manual"
              value="Manual"
              control={
                <Checkbox
                  size="large"
                  checked={checkedItem.includes("Manual")}
                  onChange={handleChange}
                />
              }
            />

            <FormControlLabel
              label="Automatic"
              value="Automatic"
              control={
                <Checkbox
                  size="large"
                  checked={checkedItem.includes("Automatic")}
                  onChange={handleChange}
                />
              }
            />

          </FormGroup>
        </FormControl>
      </div>
    </ThemeProvider>
  );
};

export default CheckBox;
