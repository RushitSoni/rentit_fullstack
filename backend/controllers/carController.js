const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Car = require("../models/carModel");
const ErrorHandler = require("../utils/errorHandler");
const session = require("express-session");
const passport = require("passport");
const Booking = require("../models/bookingModel");

// Create Car -- Admin
exports.createCar = catchAsyncErrors(async (req, res, next) => {
  // Same number plate validation
  const noplateChk = await Car.findOne({ noPlate: req.body.noPlate });
  if (!noplateChk) {
    req.body.user = req.user.id;
    const car = await Car.create(req.body);
    res.status(201).json({
      success: true,
      car,
    });
  } else {
    return next(new ErrorHandler("Number plate already exists!", 500));
  }
});

// Read Cars i.e Get All cars

exports.getCars = catchAsyncErrors(async (req, res, next) => {
  // category = Tata
  const { company, featured, title } = req.query;
  const queryObject = {};
  if (company) {
    queryObject.company = company;
  }
  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (title) {
    queryObject.title = { $regex: title, $options: "i" };
  }

  const cars = await Car.find(queryObject);
  if (!cars) {
    return next(new ErrorHandler("Cars not found!", 500));
  } else {
    res.status(200).json({
      success: true,
      cars,
      totalCars:cars.length
    });
  }
});

//Ascending Order
exports.sortRentASC = catchAsyncErrors(async (req, res, next) => {
  const cars = await Car.find().sort({ rent: 1 });
  if (!cars) {
    return next(new ErrorHandler("Cars not found!", 500));
  }

  res.status(200).json({
    sucess: true,
    cars,
  });
});

exports.sortRentDESC = catchAsyncErrors(async (req, res, next) => {
  const cars = await Car.find().sort({ rent: -1 });
  if (!cars) {
    return next(new ErrorHandler("Cars not found!", 500));
  }

  res.status(200).json({
    sucess: true,
    cars,
  });
});

// Get Particular Car

exports.getRequiredCar = catchAsyncErrors(async (req, res, next) => {
  const car = await Car.findById(req.params.id);
  if (!car) {
    return next(new ErrorHandler("Car not found", 500));
  } else {
    res.status(200).json({
      success: true,
      car,
    });
  }
});

// Update Car -- Admin

exports.updateCar = catchAsyncErrors(async (req, res, next) => {
  let car = await Car.findById(req.params.id);
  if (!car) {
    return next(new ErrorHandler("Car not found!", 404));
  }

  car = await Car.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    car,
  });
});

// Delete Car -- Admin

exports.deleteCar = catchAsyncErrors(async (req, res, next) => {
  const car = await Car.findById(req.params.id);
  if (!car) {
    return next(new ErrorHandler("Car not found!", 404));
  }
  // const booking = await Booking.find({carBooked:req.params.id});
  await Booking.remove({carBooked:req.params.id});
  await car.remove();
  res.status(200).json({
    success: true,
    message: "Car Deleted Successfully!",
  });
});

