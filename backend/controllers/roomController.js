const Room = require("../models/Room");

// GET ALL ROOMS
const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find({});
    return res.status(200).json({ rooms });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// GET ROOM BY ID
const getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    return res.status(200).json({ room });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// CREATE ROOM
const createRoom = async (req, res) => {
  try {
    const { name, type, price, capacity, description } = req.body;

    // Check required fields
    if (!name || !type || price === undefined || capacity === undefined) {
      return res.status(400).json({
        message: "Please provide name, type, price, and capacity",
      });
    }

    // Check duplicate room name
    const existingRoom = await Room.findOne({ name: name.trim() });

    if (existingRoom) {
      return res.status(409).json({
        message: "Room name already exists",
      });
    }

    // Create room
    const room = await Room.create({
      name: name.trim(),
      type,
      price: Number(price),
      capacity: Number(capacity),
      description,
      image: req.file ? `/uploads/${req.file.filename}` : null,
    });

    return res.status(201).json({
      message: "Room created successfully",
      room,
    });
  } catch (error) {
    console.error("Create room error:", error);

    return res.status(500).json({
      message: error.message,
    });
  }
};

// UPDATE ROOM
const updateRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }

    const { name, type, price, capacity, description } = req.body;

    if (name) room.name = name.trim();
    if (type) room.type = type;
    if (price !== undefined) room.price = Number(price);
    if (capacity !== undefined) room.capacity = Number(capacity);
    if (description !== undefined) room.description = description;
    if (req.file) room.image = `/uploads/${req.file.filename}`;

    await room.save();

    return res.status(200).json({
      message: "Room updated successfully",
      room,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// DELETE ROOM
const deleteRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }

    await room.deleteOne();

    return res.status(200).json({ message: "Room deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getRooms,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom,
};