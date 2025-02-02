# Fullstack Chat App

A real-time chat application built with full-stack architecture, enabling users to communicate seamlessly.

## Live Demo

Check out the live version here: https://fullstack-chat-app-dchj.onrender.com/login

## Features
- Real-time messaging
- User authentication (signup/login)
- WebSocket support for instant updates
- Modern frontend with React
- Scalable backend with Node.js and Express
- Database integration for persistent chat history

## Tech Stack
**Frontend:** React, Tailwind CSS
**Backend:** Node.js, Express.js
**Database:** MongoDB
**Real-time Communication:** WebSockets

## Installation & Setup

### Clone the Repository
```sh
git clone https://github.com/vikrammin/fullstack-chat-app.git
cd chat-app
```

### Backend Setup (Server)

Navigate to `backend` directory and install dependencies:
```sh
cd backend
npm install
```

Create a  ``.env`` file and add your environment variables:
```sh
# Server Configuration
PORT=5001

# Database Configuration
MONGODB_URI=your_mongodb_connection_string

# Authentication
JWT_SECRET=your_secret_key

# Cloudinary (For image uploads)
CLOUDINARY_CLOUD_NAME=your_cloud_name  
CLOUDINARY_API_KEY=your_api_key  
CLOUDINARY_API_SECRET=your_api_secret  

# Development Mode
NODE_ENV=development  # Change to 'production' when deploying
```

Start the backend server:
```sh
npm run dev
```

### Frontend Setup (Client)

Navigate to `frontend` directory and install dependencies: 
```sh
cd ../frontend
npm install
```

Start the frontend server:
```sh
npm run dev
```

### Run the Application

Once both frontend and backend are running, open your browser and visit: http://localhost:5173
