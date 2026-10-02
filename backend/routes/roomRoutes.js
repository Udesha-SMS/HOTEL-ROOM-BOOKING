const express = require("express");
const router = express.Router();

const {
  createRoom,
  getRooms,
  getRoomById,
  updateRoom,
  deleteRoom,
} = require("../controllers/roomController");

const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

// Protect all room routes
router.use(authMiddleware);

// Create a room
router.post("/", upload.single("image"), createRoom);

// Get all rooms
router.get("/", getRooms);

// Get one room
router.get("/:id", getRoomById);

// Update a room
router.put("/:id", upload.single("image"), updateRoom);

// Delete a room
router.delete("/:id", deleteRoom);

module.exports = router;