# Playground for learning API/backend development using Node, Express and CORS

## Using Brian Jenney's starter template (2) which I am then expanding upon using my own research and the tutoriaL

---

# 1. The API

## Setup

1. Clone or download the repo
2. Navigate to project directory with `cd .\Node_Backend_API_Basic\`
3. Install dependancies with `npm install` or `npm install express cors`
4. Start the server by running:
   ```bash
   node server.js
   ```
5. The server will start on `http://localhost:8000`.

## Endpoints

...

# 2. Basic Express.js Backend App

This simple backend application, built with [Express.js](https://expressjs.com/), demonstrates how to set up a basic server, handle routes, and use middleware like [CORS](https://www.npmjs.com/package/cors). The app fetches user data based on an ID, illustrating how to work with basic HTTP requests and responses.

## Getting Started

### Prerequisites

- Node.js installed on your machine. If you don't have it, you can download it [here](https://nodejs.org/).
- Basic knowledge of JavaScript and familiarity with HTTP requests.

### Installation

1. Clone the repository or download the source files.
2. Open your terminal and navigate to the project directory.
3. Install the dependencies:
   ```bash
   npm install express cors
   ```

### Running the Server

1. Start the server by running:
   ```bash
   node server.js
   ```
2. The server will start on `http://localhost:8000`.

### Endpoints

#### `GET /:id`

This route fetches user data based on the `id` parameter.

- **Request**:

  ```bash
  GET http://localhost:8000/1
  ```

  Replace `1` with any valid user ID (e.g., `2` or `3`).

- **Response**:
  If the user is found, you'll get a JSON response like this:

  ```json
  {
    "user": {
      "id": 1,
      "name": "John Doe"
    }
  }
  ```

  If the user is not found, you'll receive a `404` response:

  ```json
  {
    "message": "User not found"
  }
  ```

## Video Tutorial

Follow along with this [video tutorial](https://youtu.be/9mU6Mnq9ZXY) to get more detailed instructions on setting up and understanding the basics of this project.

## Want more of a challenge?

Check out [Node/Express Advanced](https://github.com/CodeCoachJS/node_express_starter/)
