# E-Commerce-_FollowAlong

## Features

### 1. Authentication Page
- User Login and Signup functionality.
- Password security with hashing.
- Token-based authentication for session management.

### 2. Product Page
- Displays a list of available products.
- Search and filter functionality for efficient product browsing.

### 3. Order Page
- View all past orders with relevant details (product name, price, date).
- Track the status of current orders.

### 4. Payment Gateway
- Multiple payment methods (credit/debit card, UPI, wallet).
- Secure transaction handling.
- Mock payment integration for testing.

---

## Tech Stack

### Frontend
- **React**: For building an interactive and dynamic user interface.
- **Next.js**: For server-side rendering and improving performance.

### Backend
- **Express.js**: For building the RESTful API to handle business logic.
- **Mongoose**: For managing the MongoDB database and creating schemas.

### Database
- **MongoDB**: To store user information, product data, orders, and payment records.

---

## Milestones

### Milestone 1: Setup Development Environment
1. Installed all necessary tools and dependencies for the MERN stack.
2. Understood server-client interaction in a full-stack application.
3. Created a basic Node.js and Express server.

### Milestone 2: Project Structure & Basic Frontend
1. Designed and implemented a structured folder hierarchy.
2. Set up React for the frontend and Express.js for the backend.
3. Configured Tailwind CSS for styling.
4. Added optional extensions (Prettier, ESLint) for development efficiency.
5. Built a functional and styled Login Page.

### Milestone 3: Backend Setup
1. Created dedicated folders for organizing backend code.
2. Configured a Node.js server using Express.
3. Established a connection to MongoDB.
4. Implemented basic error handling.

### Milestone 4: User Model & File Uploads
1. Created a User Model with a defined schema.
2. Developed a User Controller for user-related operations.
3. Configured Multer for handling file uploads.

### Milestone 5: Signup Page & Validation
1. Created a Sign-Up Page in React.
2. Implemented form validation:
   - Name (required)
   - Email (valid format required)
   - Password (minimum 2 characters)
   - Password Confirmation (must match password)
3. Used React Router for navigation.

### Milestone 6: User Registration & Authentication
1. Implemented a `/create-user` endpoint to store user details.
2. Used bcrypt.js to hash passwords before saving them to the database.
3. Implemented centralized error handling.
4. Integrated an email notification system (optional).
5. Generated JWT tokens upon successful login.

### Milestone 7: Login API
1. Created a login endpoint accepting email/password.
2. Verified user credentials and validated passwords using bcrypt.
3. Generated a JWT token for authentication.
4. Implemented error handling for invalid credentials and server errors.

### Milestone 8: Creating a Home Page
1. Designed a responsive homepage layout.
2. Implemented a grid layout for displaying product cards.
3. Ensured responsiveness for different screen sizes.

### Milestone 9: Creating a Product Form
1. Created a form to input product details.
2. Allowed users to upload multiple product images.
3. Saved the entered details in the database.

### Milestone 10: Product Schema & API Endpoint
1. Created a Mongoose schema for products.
2. Developed a POST endpoint to validate and store product data in MongoDB.

### Milestone 11: Fetch & Display Products
1. Created an API endpoint to fetch all products from the database.
2. Implemented a frontend function to fetch and display product data dynamically.
3. Used `useState` and `useEffect` to manage the data lifecycle.

### Milestone 12: Fetch & Display Filtered Products
1. Created an API endpoint to fetch products based on the user's email.
2. Implemented frontend logic to request and display filtered products.
3. Ensured efficient state management using React hooks.

---

### Milestone 13:- Edit Product Functionality
1. Created a **PUT API endpoint** to update product details in MongoDB.
2. Added an **Edit** button on the product card.
3. Implemented **auto-filled form** for editing existing product details.
4. Connected frontend with backend to send **PUT requests**.
5. Handled errors and ensured data validation.












## Contributor
- HARDIK TAILOR (SQUAD 64)