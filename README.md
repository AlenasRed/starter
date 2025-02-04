# Task Manager API

A simple **RESTful API** for managing tasks, built with **Node.js**, **Express**, and **MongoDB**. This API allows users to **create**, **read**, **update**, and **delete** tasks.

---

## 🌟 Features

- **Create a Task**: Add new tasks to the database.
- **Retrieve Tasks**: Fetch all tasks or a specific task by ID.
- **Update Tasks**: Edit task details.
- **Delete Tasks**: Remove tasks from the database.
- **Error Handling**: Graceful error responses for invalid routes or operations.

---

## 🚀 Tech Stack

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js to build RESTful APIs.
- **MongoDB**: NoSQL database for storing tasks.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **dotenv**: For managing environment variables.

---

## 🚪 Getting Started

### **Prerequisites**

- **Node.js** (v14 or above)
- **MongoDB Atlas Account** (or a local MongoDB setup)
- **npm** (Node Package Manager)

### **Installation**

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   - Create a `.env` file in the root directory.
   - Add your MongoDB connection string:

     ```env
     MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xmymd.mongodb.net/<database>?retryWrites=true&w=majority
     PORT=4224
     ```

4. **Start the server:**

   ```bash
   npm start
   ```

   The server will run at **[http://localhost:4224](http://localhost:4224)**.
