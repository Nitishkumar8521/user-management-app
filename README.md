# User Management System

A modern, responsive web application for managing user information with full CRUD (Create, Read, Update, Delete) functionality. Built with React, Chakra UI, and Vite.

![User Management System](https://img.shields.io/badge/React-18.2.0-blue) ![Chakra UI](https://img.shields.io/badge/Chakra%20UI-2.8.2-teal) ![Vite](https://img.shields.io/badge/Vite-4.5.0-purple) ![License](https://img.shields.io/badge/License-MIT-green)

## Features

- **User Management**: View, add, edit, and delete user details
- **Advanced Filtering**: Filter users by first name, last name, email, or department
- **Search & Sort**: Search across all user fields and sort by different criteria
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Pagination**: Navigate through users with configurable page sizes (10, 25, 50, 100)
- **Form Validation**: Client-side validation for all user inputs
- **Error Handling**: Comprehensive error handling for API requests

## Live Demo

[Try the live demo here](https://user-management-app-mu-murex.vercel.app/) *(Replace with your actual deployment link)*

## Screenshots

![Dashboard View](https://github.com/Nitishkumar8521/user-management-app/blob/main/main%20and%20filter.jpg?raw=true)  
*Main dashboard showing user list with filtering options*

![User Form](https://github.com/Nitishkumar8521/user-management-app/blob/main/adding.jpg?raw=true)  
*Modal form for adding/editing users*

## Tech Stack

- **Frontend**: React 18, Chakra UI
- **Build Tool**: Vite
- **HTTP Client**: Axios
- **Icons**: React Icons
- **API**: JSONPlaceholder (mock REST API)

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nitishkumar8521/user-management-app.git
   cd user-management-app

2. **Install dependencies**
   ```bash
   npm install

3. **Start the development server**
   ```bash
   npm run dev

4. **Open your browser**
Navigate to http://localhost:5173

### Usage

### Viewing Users
  1. The main dashboard displays a list of users in a table format
  2. Use the pagination controls at the bottom to navigate through users
  3. Adjust the number of users shown per page using the dropdown

### Searching and Filtering
  1. Use the search box to find users by any field (name, email, department)
  2. Click the "Filter" button to open advanced filtering options
  3. Select a sorting option from the dropdown to order users by specific criteria

### Adding a User
  1. Click the "Add User" button
  2. Fill in the required fields in the modal form:
     - First Name
     - Last Name
     - Email
     - Department
  3. Click "Create" to add the user

### Editing a User
  1. Click the edit icon (pencil) next to any user
  2. Modify the user details in the form
  3. Click "Update" to save changes

### Deleting a User
  1. Click the delete icon (trash can) next to any user
  2. Confirm the deletion in the confirmation dialog

### API Integration
This application uses the JSONPlaceholder API for demonstration purposes:
 - GET /users: Fetch all users
 - POST /users: Create a new user
 - PUT /users/:id: Update a user
 - DELETE /users/:id: Delete a user

Note: JSONPlaceholder is a fake API, so changes are simulated but not persisted

### Project Structure
```bash
src/
├── components/          # React components
│   ├── UserList.jsx    # Main user table with actions
│   ├── UserForm.jsx    # Form for adding/editing users
│   ├── FilterPopup.jsx # Advanced filtering component
│   ├── Pagination.jsx  # Pagination controls
│   └── SearchSort.jsx  # Search and sort controls
├── hooks/
│   └── useUsers.js     # Custom hook for user management
├── utils/
│   └── validation.js   # Form validation utilities
├── App.jsx             # Main application component
└── main.jsx            # Application entry point
```

### Customization

### Adding New Fields
To add new fields to the user form:
  1. Update the form in UserForm.jsx
  2. Modify the validation rules in validation.js
  3. Update the API calls in useUsers.js hook

### Changing Styling
The application uses Chakra UI's theme system. To customize:
 1. Create a custom theme in a new file (e.g., theme.js)
 2. Import and wrap your app with ChakraProvider and your custom theme

### Connecting to a Real API
Replace the API calls in the useUsers.js hook:
 1. Update the API_BASE_URL constant
 2. Modify the request/response formats to match your API
 3. Add authentication headers if required

### Performance Optimizations
- React memoization with useMemo and useCallback
- Efficient re-rendering with proper dependency arrays
- Debounced search implementation
- Virtualized scrolling for large datasets (can be added)

### Troubleshooting

### Common Issues
 1. Dependency installation fails
    - Clear npm cache: npm cache clean --force
    - Delete node_modules and package-lock.json, then reinstall
 2. Port already in use
    - The dev server runs on port 5173 by default
    - Use npm run dev -- --port 3000 to specify a different port
 3. API errors
    - Check your internet connection
    - Verify JSONPlaceholder API status
