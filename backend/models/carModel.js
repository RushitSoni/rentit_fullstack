const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Car Title cannot be empty!"],
  },
  description: {
    type: String,
    required: [true, "Car Description cannot be empty!"],
  },
  rent: {
    type: Number,
    maxLength: [5, "Rent cannot exceed 5 characters"],
    required: [true, "Car Rent cannot be empty!"],
  },
  bookedSlot: 
    [{
      from: {
        type: String,
      },
      to: {
        type: String,
      },
      bookingId:{
        type:mongoose.Schema.ObjectId,
        ref:"Booking",
        required:true
      }
    }
    ],
  featured: {
    type: Boolean,
    default: false,
  },
  // image: {
  //   public_id: {
  //     type: String,
  //     required: true,
  //   },
  //   url: {
  //     type: String,
  //     required: true,
  //   },
  // },
  noPlate: {
    type: String,
    required: [true, "Number Plate cannot be empty!"],
  },
  company: {
    type: String,
    required: [true, "Car Category cannot be empty!"],
    enum: ["Tata", "Hyundai", "Maruti Suzuki", "Toyota", "Mahindra"],
  },
  model: {
    type: String,
    required: [true, "Car Model cannot be empty!"],
  },
  features: {
    colour: {
      type: String,
      required: [true, "Colour can't be empty!"],
    },
    seats: {
      type: Number,
      required: [true, "No. of Seats cannot be empty!"],
    },
    gear: {
      type: String,
      required: [true, "Gear type can't be empty!"],
      enum: ["Auto", "Manual"],
    },
    fuelType: {
      type: String,
      required: [true, "Fuel type can't be empty!"],
      enum: ["Petrol", "Gas", "Diesel"],
    },
    gps: {
      type: String,
      required: [true, "GPS field can't be empty!"],
    },
    usb: {
      type: String,
      required: [true, "USB field can't be empty!"],
    },
    radio: {
      type: String,
      required: [true, "FM Radio field can't be empty!"],
    },
    parkingSensor: {
      type: String,
      required: [true, "Sensor field can't be empty!"],
    },
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Car", carSchema);
