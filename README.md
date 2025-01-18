# Task Management API

## Project Overview
This is a backend-only API for managing tasks, built using **Node.js**, **Express.js**, **TypeScript**, and **MongoDB**. The API is secured with JWT authentication and follows RESTful principles to perform task management operations such as creating, reading, updating, and deleting tasks. The API is deployed for public access to test live functionality.

---

## Features
- **JWT Authentication:** Secures user accounts and task-related endpoints.
- **Task Management:** CRUD operations for user-specific tasks with status tracking.
- **RESTful Design:** Intuitive and consistent endpoint structure.
- **Deployed API:** Access the live API for testing.

---

## Deployment
The API is deployed and accessible at:
**Base URL:** [https://stealthassignment-production.up.railway.app/](https://stealthassignment-production.up.railway.app/)

---

## Set Up and Run Locally

### Prerequisites
Ensure you have the following installed:
- Node.js (v16 or later)
- MongoDB (local or cloud, e.g., MongoDB Atlas)
- Git

### Steps to Run Locally
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/rameshchandra8520/StealthAssignment.git
   cd StealthAssignment
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file in the root directory with the following variables:
   ```env
   MONGO_URI=<Your MongoDB URI>
   JWT_SECRET=<Your JWT Secret>
   PORT=3000
   ```

4. **Build the Project:**
   ```bash
   npm run build
   ```

5. **Run the Project:**
   ```bash
   npm start
   ```
   The server will start at `http://localhost:3000`.

6. **Test API Endpoints:**
   Use Postman or any HTTP client to test the endpoints.

---

## API Endpoints

### Authentication
- **POST** `/auth/register`: Register a new user.
  - Request Body:
    ```json
    {
      "name": "your_name",
      "email": "your_email",
      "password": "your_password"
    }
    ```
- **POST** `/auth/login`: Authenticate a user and get a JWT token.
  - Request Body:
    ```json
    {
      "email": "your_email",
      "password": "your_password"
    }
    ```

### Tasks
- **POST** `/tasks`: Create a new task (JWT required).
  - Request Body:
    ```json
    {
      "title": "Task Title",
      "description": "Task Description",
    }
    ```

- **GET** `/tasks`: Retrieve all tasks for the logged-in user.

- **PUT** `/tasks/:id`: Update a task (JWT required).
  - Request Body:
    ```json
    {
      "title": "Updated Title",
      "description": "Updated Description",
      "status": "completed"
    }
    ```

- **DELETE** `/tasks/:id`: Delete a task by ID (JWT required).

---

## Technologies Used
- **Node.js**: Server-side runtime.
- **Express.js**: Backend framework.
- **TypeScript**: Type-safe JavaScript.
- **MongoDB**: NoSQL database.
- **JWT**: Secure token-based authentication.
- **Postman**: API testing.
- **bcrypt**: Password hashing.
- **dotenv**: Environment variable management.

---

## Documentation
### Postman Collection
You can find the complete Postman collection with all API endpoints [here](TaskManagementAPI.postman_collection.json).

