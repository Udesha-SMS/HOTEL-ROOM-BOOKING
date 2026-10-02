Hotel Room Booking System

=================================

FILE STRUCTURE

=================================

```text
HostelRoomBookingSystem/
├── backend/                         <- Node.js + Express backend server
│   ├── controllers/
│   │   ├── authController.js       (user authentication)
│   │   ├── roomController.js       (room management)
│   │   └── bookingController.js    (booking management)
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js       (JWT authentication)
│   │   └── roleMiddleware.js       (role-based access control)
│   │
│   ├── models/
│   │   ├── User.js                 (user accounts)
│   │   ├── Room.js                 (hostel room information)
│   │   └── Booking.js              (room booking information)
│   │
│   ├── routes/
│   │   ├── authRoutes.js           -> Authentication routes
│   │   ├── roomRoutes.js           -> Room management routes
│   │   └── bookingRoutes.js        -> Booking management routes
│   │
│   ├── config/
│   │   └── database.js             (MongoDB configuration)
│   │
│   ├── .env
│   ├── package.json
│   └── server.js
│
└── frontend/                       <- React web application
    ├── public/
    └── src/
        ├── components/
        ├── pages/
        ├── services/
        ├── context/
        ├── utils/
        ├── App.js
        └── index.js
```

---

=================================

PROJECT OVERVIEW

=================================

The **Hostel Room Booking System** is a web-based application developed to simplify and manage the hostel room booking process.

The system allows users to register and log in securely, view available hostel rooms, check room details and capacity, and create room bookings. Users can also view and manage their own bookings.

Administrators can manage hostel rooms and booking requests. The system also manages room capacity and occupancy to help prevent bookings when the available capacity has been reached.

The application uses authentication and role-based access control to provide secure access to different system functionalities.

---

=================================

CORE FEATURES

=================================

User Management

* User registration
* User login
* JWT-based authentication
* Secure password handling
* User profile information
* Role-based access control

Room Management

* View available hostel rooms
* View individual room details
* Add new rooms
* Update room information
* Delete rooms
* Manage room capacity
* Check room availability

Booking Management

* Create room bookings
* View personal bookings
* View booking details
* Update pending bookings
* Cancel bookings
* Delete pending bookings
* Approve or reject bookings
* Manage booking status

### Occupancy Management

* Check available room capacity
* Prevent over-capacity bookings
* Maintain room occupancy information
* Update occupancy based on booking status

---

=================================

## TECHNOLOGY STACK

=================================

### Frontend

* React.js
* JavaScript
* HTML
* CSS

### Backend

* Node.js
* Express.js
* REST API

### Database

* MongoDB

### Authentication

* JSON Web Token (JWT)
* bcrypt

### Development Tools

* Visual Studio Code
* Git
* GitHub
* Postman
* npm

---

=================================

## API ENDPOINTS

=================================

### Authentication

```text
POST    /api/auth/register
POST    /api/auth/login
GET     /api/auth/me
```

### Rooms

```text
GET     /api/rooms
GET     /api/rooms/:id
POST    /api/rooms
PUT     /api/rooms/:id
DELETE  /api/rooms/:id
```

### Bookings

```text
POST    /api/bookings
GET     /api/bookings/my
GET     /api/bookings/:id
PUT     /api/bookings/:id
PATCH   /api/bookings/:id/status
PATCH   /api/bookings/:id/cancel
DELETE  /api/bookings/:id
```

> **Note:** The endpoint names above should be replaced with your actual implemented routes if your backend uses different route names.

---

=================================

## LOCAL SETUP & INSTALLATION

=================================

### 1. BACKEND SETUP

Navigate to the backend directory:

```bash
cd backend
```

Install the required dependencies:

```bash
npm install
```

Create a `.env` file and configure the MongoDB connection and JWT secret:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend server:

```bash
npm start
```

The backend will run on:

```text
http://localhost:5000
```

---

### 2. FRONTEND SETUP

Navigate to the frontend directory:

```bash
cd frontend
```

Install the required dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm start
```

The frontend will normally run on:

```text
http://localhost:3000
```

---

=================================

## DATABASE

=================================

The project uses **MongoDB** as the database.

The main data models are:

### User

Stores user registration, login, authentication and role information.

### Room

Stores hostel room information, including room details, capacity and availability.

### Booking

Stores booking information and maintains the relationship between users and hostel rooms.

---

=================================

## AUTHENTICATION & AUTHORIZATION

=================================

The system uses **JWT-based authentication** to secure protected API endpoints.

Users must authenticate before accessing functions such as creating and managing bookings.

Role-based authorization is used to control administrative functions.

### User

Users can:

* Register and log in
* View available rooms
* View room details
* Create bookings
* View their bookings
* Update pending bookings
* Cancel bookings

### Administrator

Administrators can:

* Add rooms
* Update rooms
* Delete rooms
* View bookings
* Manage booking requests
* Approve or reject bookings
* Manage room capacity and occupancy

---

=================================

## BOOKING WORKFLOW

=================================

```text
User Registration
        ↓
User Login
        ↓
View Available Rooms
        ↓
Select Room
        ↓
Check Room Capacity
        ↓
Create Booking
        ↓
Pending Booking
        ↓
Administrator Review
        ↓
Approve / Reject
        ↓
Update Room Occupancy
```

---

=================================

## PROJECT OBJECTIVE

=================================

The main objective of the Hostel Room Booking System is to provide a centralized platform for managing hostel rooms and bookings.

The system aims to:

* Reduce manual booking processes
* Make room availability easier to manage
* Simplify the room booking process
* Improve booking management
* Prevent over-capacity bookings
* Provide secure user authentication
* Provide administrators with effective room and booking management

---

=================================

## DEVELOPER

=================================

**Name:** Shamith Udesha

**Student ID:** IT22586902

**Degree:** BSc (Hons) in Information Technology

**Specialization:** Information Technology

**Institute:** Sri Lanka Institute of Information Technology (SLIIT)

=================================
