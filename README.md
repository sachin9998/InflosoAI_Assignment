# Infloso AI - Assignment

- Live Link: https://infloso-ai-assignment.vercel.app/login 
- Backend URL: https://inflosoai-assignment.onrender.com
- Github Repo: https://github.com/sachin9998/InflosoAI_Assignment

## Overview

This project implements a secure login and signup application using React.js for the frontend, Node.js and Express.js for the backend API, and JWT for authentication.  It fulfills the requirements of the Full Stack Developer Assignment, demonstrating proficiency in building a complete web application with robust authentication.

## Project Description

This application provides login and signup functionality for a fictional music streaming service called "MelodyVerse". The backend API handles user registration and authentication, while the frontend provides user-friendly interfaces for these actions.

## Technologies Used

*   **Frontend:** React.js, Tailwind CSS
*   **Backend:** Node.js, Express.js
*   **Database:**  MongoDB
*   **Authentication:** JWT (jsonwebtoken)
*   **Password Hashing: Bcryptjs

## Features

*   **Signup:**
    *   User registration with name, email, and password.
    *   Input validation and error handling.
    *   Terms and conditions agreement.
    *   Redirect to login after successful signup.
*   **Login:**
    *   User authentication with email and password.
    *   Input validation and error handling.
    *   "Remember Me" functionality.
    *   Redirect to homepage after successful login.
*   **JWT Authentication:**
    *   JWT generation upon successful login/signup.
    *   JWT validation for protected routes.
*   **Responsive Design:** Implemented using Tailwind CSS.

## API Endpoints

*   **POST /signup:** Registers a new user.
*   **POST /login:** Authenticates a user.

## Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    ```

2.  **Backend Setup:**
    *   Navigate to the backend directory:
        ```bash
        cd backend
        ```
    *   Install dependencies:
        ```bash
        npm install
        ```
    *   Configure database connection: _(Provide instructions on configuring the database connection, e.g., environment variables)_
    *   Start the server:
        ```bash
        npm start  _(or nodemon, etc.)_
        ```

3.  **Frontend Setup:**
    *   Navigate to the frontend directory:
        ```bash
        cd frontend
        ```
    *   Install dependencies:
        ```bash
        npm install
        ```
    *   Start the development server:
        ```bash
        npm start
        ```

## How to Run the Application

1.  Start the backend server.
2.  Start the frontend development server.
3.  Open your browser and navigate to the frontend URL (usually `http://localhost:3000`).

## Best Practices Implemented

*   Input validation and sanitization.
*   Secure password hashing (bcrypt).
*   Error handling and informative error messages.
*   Clean, well-structured, and documented code.
*   Use of environment variables for sensitive information.
