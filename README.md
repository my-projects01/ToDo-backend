```markdown
# Software Engineer Assessment (MERN Stack) - Backend

## Getting Started

### Prerequisites
- Node.js
- MongoDB
- npm or yarn
```

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/my-projects01/ToDo-backend.git
   cd ToDo-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Create .env file in root directory
1. Add the following variables into the created `.env` file:
   ```bash
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=jwt_secret_key
   PORT=8000
   ```

### Running the Application
2. Start the backend server by entering the following command in the root directory:
   ```bash
   npm start
   ```

3. The backend server will run on `http://localhost:8000`.

## API Endpoints
- **User Authentication**
  - `POST /api/users/register` - Register a new user
  - `POST /api/users/login` - Log in an existing user
  - `GET /api/users/me` - Get user details

- **Task Management**
  - `POST /api/tasks/create` - Add a new task
  - `GET /api/tasks/get` - Get all tasks
  - `PUT /api/tasks/update/:id` - Update a task
  - `DELETE /api/tasks/delete/:id` - Delete a task

