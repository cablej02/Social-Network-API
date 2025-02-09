# Social-Network-API

## Description

This is a **backend API** for a social networking website built using **Node.js, Express, TypeScript, and MongoDB**. It allows users to:

- **Manage users**: Add, update, and delete users.
- **Post thoughts**: Create, update, and delete thoughts.
- **React to thoughts**: Add and remove reactions to thoughts.
- **Manage friendships**: Add and remove friends.

Since this is a **backend-only application**, an API testing tool like **Postman** or **Insomnia** is required to interact with the endpoints.

---

## Installation

### Required Tools

- **[Node.js](https://nodejs.org/)**
- **[MongoDB](https://www.mongodb.com/)** (Must be running locally or use **MongoDB Atlas**)

### Setup Instructions

1. **Clone the Repository**  
   Open a terminal and run:

    ```bash
    git clone git@github.com:cablej02/Social-Network-API.git
    ```

2. **Navigate to the Project Directory**  

    ```bash
    cd Social-Network-API
    ```

3. **Install Dependencies**  
   This project requires `express`, `mongoose`, and `typescript`. Install them with:

    ```bash
    npm install
    ```

---

## Usage

### 🎥 Video Walkthrough

📽️ [Watch the walkthrough video](https://drive.google.com/file/d/1p5iwam1HksZ68kQ9y_hNYM6GYJgkpx-b/view?usp=drive_link) for a step-by-step guide.

### Running the Application

1. **Build the Project**  
   Since this is a TypeScript project, compile it to JavaScript:

    ```bash
    npm run build
    ```

2. **Start the API Server**  

    ```bash
    npm start
    ```

   The server will run on `http://localhost:3001/`.

3. **Test API Endpoints**  
   Use an API client like **Postman** or **Insomnia**, or make requests via **cURL**.

---

## API Routes

### User Routes

| Method   | Endpoint                               | Description                                          |
|----------|----------------------------------------|------------------------------------------------------|
| **GET**  | `/api/users`                           | Get all users                                       |
| **GET**  | `/api/users/:userId`                  | Get a single user by ID (populated with thoughts & friends) |
| **POST** | `/api/users`                           | Create a new user                                   |
| **PUT**  | `/api/users/:userId`                  | Update a user by ID                                |
| **DELETE** | `/api/users/:userId`                 | Delete a user by ID (removes associated thoughts) |
| **POST** | `/api/users/:userId/friends/:friendId` | Add a friend to a user’s friend list               |
| **DELETE** | `/api/users/:userId/friends/:friendId` | Remove a friend from a user’s friend list        |

### Thought Routes

| Method   | Endpoint                      | Description                                        |
|----------|--------------------------------|----------------------------------------------------|
| **GET**  | `/api/thoughts`                | Get all thoughts                                  |
| **GET**  | `/api/thoughts/:thoughtId`     | Get a single thought by ID                        |
| **POST** | `/api/thoughts`                | Create a new thought (adds it to the user’s thought array) |
| **PUT**  | `/api/thoughts/:thoughtId`     | Update a thought by ID                            |
| **DELETE** | `/api/thoughts/:thoughtId`   | Delete a thought by ID                            |

### Reaction Routes

| Method   | Endpoint                                   | Description                            |
|----------|-------------------------------------------|----------------------------------------|
| **POST** | `/api/thoughts/:thoughtId/reactions`      | Add a reaction to a thought           |
| **DELETE** | `/api/thoughts/:thoughtId/reactions/:reactionId` | Remove a reaction from a thought |

---

## Technologies Used

- **Node.js** (runtime environment)
- **Express.js** (web framework)
- **MongoDB + Mongoose** (database & ODM)
- **TypeScript** (type safety & maintainability)

---

## Questions?

For any questions or collaboration requests, feel free to reach out:

- **GitHub:** [cablej02](https://github.com/cablej02)
- **Email:** [cablej02@gmail.com](mailto:cablej02@gmail.com)

