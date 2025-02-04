# E-Commerce-_FollowAlong
 **Features**

1. **Authentication Page**  
   - User Login and Signup functionality.  
   - Password security.  
   - Token-based authentication for session management.  

2. **Product Page**  
   - Displays a list of available products.  
   - Search and filter functionality for efficient product browsing.  

3. **Order Page**  
   - View all past orders with relevant details (product name, price, date).  
   - Track the status of current orders.  

4. **Payment Gateway**  
   - Multiple payment methods (credit/debit card, UPI, wallet).  
   - Secure transaction handling.  
   - Mock payment integration for testing.


   ## Tech Stack

### **Frontend**  
- **React**: For building an interactive and dynamic user interface.  
- **Next.js**: For server-side rendering and improving performance.  

### **Backend**  
- **Express.js**: For building the RESTful API to handle business logic.  
- **Mongoose**: For managing the MongoDB database and creating schemas.  

### **Database**  
- **MongoDB**: To store user information, product data, orders, and payment records. 
---

## MILESTONE1 :-
1. Set Up the Development Environment
Installed all the necessary tools and dependencies to set up the development environment for the MERN (MongoDB, Express, React, Node.js) stack project. This includes configuring the backend and frontend dependencies to ensure smooth development.
2. Understand Server-Client Interaction
Gained an understanding of how the frontend (React) interacts with the backend (Node.js/Express) using APIs. Focused on how the client sends requests to the server, and how the server processes them and sends back responses.
3. Set Up a Simple Server
Created a basic server using Node.js and Express, laying the foundation for the project. The server is set up to handle API requests and provide a foundation for future endpoints and business logic.

---
## MILESTONE 2  :-
1. Create a Structured Folder Hierarchy
Designed and implemented a structured folder hierarchy for the project, organizing the files in a way that ensures easy maintainability and scalability for both the frontend and backend.
2. Set Up React App (Frontend) and Node.js Server (Backend)
Frontend: Set up a React app to serve as the user interface for the project.
Backend: Configured a Node.js server using Express to handle API requests, providing the foundation for server-side logic and database interaction.
3. Configure Tailwind CSS for Styling
Integrated and configured Tailwind CSS into the project to streamline the styling process and improve the overall design flexibility with utility-first CSS.
4. Add Optional Extensions for Development Efficiency
Installed and configured optional extensions such as Prettier, ESLint, and others to improve code formatting, quality, and overall development workflow.
5. Build a Functional and Styled Login Page (Frontend)
Developed and styled a Login Page for the frontend using React, Tailwind CSS, and connecting it to the backend for user authentication functionality.

---
## MILESTONE3 :- 
1. Set Up Dedicated Folders for Organizing Backend Code
Created dedicated folders for organizing the backend code. This ensures better structure and maintainability of the server-side code, with clear separation of concerns.
2. Initialized and Configured a Node.js Server
Set up a Node.js server using Express to handle API requests. This provides the backbone for the backend, allowing it to process incoming requests and return responses.
3. Connected the Application to MongoDB
Established a connection to MongoDB, enabling the application to store and manage data in a NoSQL database. This allows for flexible data handling and seamless interactions with the backend.
4. Implemented Basic Error Handling
Incorporated basic error handling in the server to ensure smooth operation. This handles potential errors gracefully, improving the reliability and stability of the application.

---

## MILESTONE4 :-
1. Create a User Model
Designed and implemented a User Model that serves as a blueprint for how user data is structured and stored in the database. This model defines the user schema and the fields that are needed for user-related data.
2. Create a User Controller
Developed a User Controller that handles the logic related to user data. It manages tasks such as adding a new user, retrieving user information, and other user-related operations.
3. Enable and Configure Multer for File Uploads
Configured Multer to handle file uploads in the application. This allows users to upload files (like images) which will be stored appropriately in the system. Multer is set up to handle storage configurations and file validation.


---


## MILESTONE5 :-
1. Created a Sign-Up Page in React.
2. Implemented form validation for:
      Name (required)
      Email (valid format required)
      Password (minimum 2 characters)
      Password Confirmation (must match password)

4. Used React Router for navigation.

---


## Milestone 6: User Registration and Authentication
1. User Creation Endpoint (/create-user):
 Implemented an endpoint to create a new user.
 Validated the email to ensure the user doesn’t already exist.
 Successfully handled file uploads (e.g., avatar) using multer.

 2. Password Hashing:
 Used bcryptjs to hash passwords before saving them to the database, ensuring secure password storage.

4. Error Handling:
Incorporated centralized error handling using a custom ErrorHandler class.
Applied catchAsyncErrors middleware to manage asynchronous errors in the routes.

5. User Data Storage:
Stored user details (e.g., name, email, password, avatar) in MongoDB with encrypted password.

6. Email Notification (Optional):
Integrated an email notification system to send a welcome email to the user after successful registration (using sendMail).

7. JWT Token Generation:
Added a method to generate JWT tokens upon user login (for future use in authentication routes).
---

## Milestone 7: Create Login Endpoint
1. Task Completed ✅
2. Implemented a login API endpoint.
3. Accepted user credentials (email/username and password).
4. Retrieved the corresponding user from the database.
5. Validated the password using bcrypt.
6. Compared the entered password with the stored hashed password for authentication.
7. Generated a JWT token upon successful login for authentication.
8. Implemented error handling for invalid credentials and server errors.




---

## MILESTONE 8:-  Creating a Product Form
Design the Homepage Layout.
Set up a responsive grid layout to display multiple product cards neatly.
Ensured the layout adapts to different screen sizes for a better user experience.

---

## MILESTONE 9 :- 
1. Create a form to input product details.
2. Allow users to upload multiple product images.
3. Save the entered details in the database.
