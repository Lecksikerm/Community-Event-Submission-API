# Community Events API

A simple and clean **Events Management API** built with **Node.js**, **Express**, **MongoDB**, and **Mongoose**, featuring validation, pagination, and a minimal frontend demo.

---

## 🚀 Features

* Create, read, update, and delete events
* Pagination support for listing events
* Request validation with **express-validator**
* MongoDB database connection using **Mongoose**
* Minimal HTML frontend for quick testing
* Well-structured project architecture

---

## 📁 Project Structure

```
project-root/
│── public/
│   └── index.html
│── config/
│   └── db.js
│── controllers/
│   └── eventController.js
│── routes/
│   └── eventRoutes.js
│── models/
│   └── Event.js
│── server.js
│── package.json
│── README.md
```

---

## 🛠 Installation

### 1. Clone the repository

```
git clone https://github.com/Lecksikerm/community-events-api.git
cd community-events-api
```

### 2. Install dependencies

```
npm install
```

### 3. Add environment variables

Create a `.env` file:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

## ▶️ Start the Server

```
npm run dev   # for development
npm start     # for production
```

Server runs at:

```
http://localhost:5000
```

---

## 📚 API Endpoints

### **Create Event**

**POST /api/events**

```
{
  "title": "Tech Conference",
  "description": "A meetup for developers.",
  "location": "Lagos",
  "date": "2025-01-12"
}
```

### **Get All Events (with pagination)**

**GET /api/events?page=1&limit=5**

### **Get Single Event**

**GET /api/events/:id**

### **Update Event**

**PUT /api/events/:id**

### **Delete Event**

**DELETE /api/events/:id**

---

## 🌐 Minimal Frontend

Open in browser:

```
http://localhost:5000
```

Displays all events visually.

---

## 🧪 Test With Postman

* Import endpoints manually
* Use JSON body format
* Check request validation errors

---

## 📦 Technologies Used

* Node.js
* Express
* MongoDB / Mongoose
* Express-Validator
* CORS
* HTML/CSS (minimal frontend)

---

## ✨ Future Improvements

* User authentication (JWT)
* File uploads (images for events)
* Admin dashboard
* Search + filtering

---

## 📝 Author

**Kareem Idris**
Backend Developer

---

## ⭐ Contribute

Pull requests are welcome!

If you like this project, give it a **star ⭐ on GitHub**.

