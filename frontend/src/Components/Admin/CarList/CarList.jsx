import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CarList.css";
import "../Dashboard.css";
import "../Sidebar/Sidebar.css";
import { DataGrid } from "@mui/x-data-grid";
import { BrowserRouter as Router, Link, Route, Switch, useNavigate } from "react-router-dom"
import { MdDeleteOutline } from "react-icons/md";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import Navbar from "../../Navbar/Navbar";
import SideBar from "../Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { deleteCar, getAllCarsAdmin } from "../../../Actions/adminActions";
import New from "../Car/New";

export default function CarList() {
  // const [data, setData] = useState(productRows);
  // const [cars, setCars] = useState([]);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { cars } = useSelector((state) => state.admin);
  const getCars = async () => {
    // const cars1 = [];
    // await axios.get("/myapp/cars").then((car) => {
    //   Object.values(car.data)[1].map((e) => {
    //     cars1.push({
    //       id: e._id,
    //       title: e.title,
    //       noPlate: e.noPlate,
    //       stock: e.stock,
    //       rent: e.rent,
    //       key:e._id
    //     });
    //   });
    //   setCars(cars1);
    // });
  };
  useEffect(() => {
    dispatch(getAllCarsAdmin());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteCar(id));
    navigate("/admin/dashboard");
  };
  const rows = [];
  cars &&
    cars.forEach((car) => {
      let carRent = `₹${car.rent}/hr`;
      rows.push({
        id: car._id,
        title: car.title,
        rent: carRent,
      });
    });
  const columns = [
    { field: "id", headerName: "Car ID", minWidth: 200, flex: 0.3 },
    {
      field: "title",
      headerName: "Car Name",
      minWidth: 130,
      flex: 0.2,
      // renderCell: (params) => {
      //   return (
      //     <div className='productListItem'>
      //       <img className='productListImg' src={params.row.img} alt='' />
      //       {params.row.name}{' '}
      //     </div>
      //   )
      // },
    },
    {
      field: "rent",
      headerName: "Rent",
      flex: 0.1,
      minWidth: 140,
    },
    {
      field: "action",
      headerName: "Action",
      minWidth: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/car/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>

            <MdDeleteOutline
              className="productListDelete"
              size="1.5rem"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div style={{ width: "100%", backgroundColor: "#222831", height: "100vh" }}>
      <Navbar />
      <div className="main-container2">
        <div className="sidebar-container">
          <SideBar />
        </div>
        <div className="carList">
          <div className="createProduct">

          {/* /admin/car/new" */}
            <Link to="/admin/dashboard/car/new">
              <button className="productAddButton">Create</button>
            </Link>
          </div>
          <DataGrid
            style={{ color: "#EEEEEE",fontSize:"0.85vmax" }}
            rows={rows}
            disableSelectionOnClick
            columns={columns}
            autoHeight
            // autoHeight
            // pageSize={8}
            // rowsPerPageOptions={[5]}
            // checkboxSelection
          />
        </div>
      </div>
    </div>
  );
}
