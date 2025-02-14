# User Authentication App with Express.js, MongoDB, and TypeScript

This project is a **User Authentication System** built using **Express.js**, **MongoDB**, and **TypeScript**. It provides endpoints for user registration, login, and searching for users by username or email. The application uses **JWT (JSON Web Tokens)** for authentication and ensures secure password storage using **bcryptjs**.

---

## **Features**

1. **User Registration**: Register a new user with details like username, email, password, full name, gender, date of birth, and country.
2. **User Login**: Authenticate users and generate a JWT token for subsequent requests.
3. **Search User**: Retrieve user details by username or email (protected route requiring JWT authentication).

---

## **Tech Stack**

- **Backend**: Express.js (Node.js)
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Language**: TypeScript
- **Password Hashing**: bcryptjs
- **Environment Variables**: dotenv
- **API Testing**: Postman

---

## **Project Structure**

```bash
/
├── src/
│ ├── config/
│ │ └── db.ts # MongoDB connection setup
│ ├── controllers/
│ │ ├── authController.ts # Handles user registration and login
│ │ └── userController.ts # Handles user search
│ ├── middleware/
│ │ └── authMiddleware.ts # JWT authentication middleware
│ ├── models/
│ │ └── User.ts # MongoDB User model
│ ├── routes/
│ │ ├── authRoutes.ts # Routes for authentication
│ │ └── userRoutes.ts # Routes for user search
│ ├── interfaces/
│ │ └── UserInterface.ts # TypeScript interfaces for User
│ ├── .env # Environment variables
│ └── server.ts # Entry point for the application
├── package.json # Project dependencies and scripts
├── tsconfig.json # TypeScript configuration
└── nodemon.json # Nodemon configuration for development
```

---

## **Setup Instructions**

### **1. Prerequisites**

- Node.js and npm installed.
- MongoDB installed and running locally or a connection string to a remote MongoDB instance.
- Postman (or any API testing tool) for testing endpoints.

### **2. Clone the Repository**

```bash
git clone https://github.com/your-username/user-auth-app-ts.git
cd user-auth-app-ts
```

### **3. Install Dependencies**

```bash
npm install
```

### **4. Set Up Environment Variables**

```env
MONGO_URI=mongodb://localhost:27017/user-auth-app
JWT_SECRET=your_jwt_secret_key
```

### **5. Run the Application**

- Development Mode (with hot-reloading):
  ```bash
  npm install
  ```
- Production Mode:
  ```bash
  npm run build
  npm start
  ```
  The server will start on http://localhost:5000.

---

## **API Endpoints**

### **1. Register a User**

- URL: `/api/auth/register`
- Methor: `POST`
- Request Body:
  ```JSON
  {
    "username": "john_doe",
    "email": "john@example.com",
    "password": "password123",
    "fullName": "John Doe",
    "gender": "Male",
    "dateOfBirth": "1990-01-01",
    "country": "USA"
  }
  ```
- Response:
  ```JSON
  {
    "message": "User registered successfully",
    "user": {
      "username": "john_doe",
      "email": "john@example.com",
      "fullName": "John Doe",
      "gender": "Male",
      "dateOfBirth": "1990-01-01T00:00:00.000Z",
      "country": "USA"
    }
  }
  ```

### **2. Login a User**

- URL: `/api/auth/login`
- Methor: `POST`
- Request Body:
  ```JSON
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- Response:
  ```JSON
  {
    "message": "Login successful",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  ```

### **3. Search for a User**

- URL: `/api/user/search/:query`
- Methor: `GET`
- Headers:
  `Authorization: Bearer <JWT_TOKEN>`
- Response:
  ```JSON
  {
    "username": "john_doe",
    "email": "john@example.com",
    "fullName": "John Doe",
    "gender": "Male",
    "dateOfBirth": "1990-01-01T00:00:00.000Z",
    "country": "USA"
  }
  ```

---

# Database Schema

The `User` collection in MongoDB has the following schema:

```typescript
{
  username: string;
  email: string;
  password: string;
  fullName: string;
  gender: "Male" | "Female" | "Other";
  dateOfBirth: Date;
  country: string;
}
```
