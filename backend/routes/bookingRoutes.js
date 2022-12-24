const express = require('express');
const { bookCar, allBookings, particularBooking, deleteBooking } = require('../controllers/bookingController');
const authorized = require('../middleware/authentication');
const router = express.Router();

router.route("/booking/new").post(authorized.myAuth,bookCar);
router.route("/admin/bookings").get(authorized.myAuth,authorized.authorizedRoles("admin"),allBookings);
router.route("/me/bookings").get(authorized.myAuth,particularBooking);
router.route("/admin/booking/:id").delete(authorized.myAuth,authorized.authorizedRoles("admin"),deleteBooking);
module.exports = router;