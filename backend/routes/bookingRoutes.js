const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// @desc    Create new booking
// @route   POST /api/bookings
// @access  Private
const createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    const createdBooking = await booking.save();
    res.status(201).json(createdBooking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get user bookings
// @route   GET /api/bookings
// @access  Private
const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id })
      .populate("room", "name type price");
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get booking by ID
// @route   GET /api/bookings/:id
// @access  Private
const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate("room user");
    if (booking) {
      res.json(booking);
    } else {
      res.status(404).json({ message: "Booking not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update booking
// @route   PUT /api/bookings/:id
// @access  Private
const updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (booking) {
      Object.assign(booking, req.body);
      const updatedBooking = await booking.save();
      res.json(updatedBooking);
    } else {
      res.status(404).json({ message: "Booking not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Cancel booking
// @route   DELETE /api/bookings/:id
// @access  Private
const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (booking) {
      booking.status = "cancelled";
      await booking.save();
      res.json({ message: "Booking cancelled" });
    } else {
      res.status(404).json({ message: "Booking not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

router.route("/").post(createBooking).get(getBookings);
router.route("/:id").get(getBookingById).put(updateBooking).delete(cancelBooking);

module.exports = router;
