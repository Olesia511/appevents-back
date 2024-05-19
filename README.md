# AppEvents-Back

AppEvents-Back is the backend service for the AppEvents-UX application. It provides endpoints for managing events and participants.

## Website Location

The backend is hosted at: [https://appevents-back.onrender.com](https://appevents-back.onrender.com)

## Routes

### /api/events

This route handles paginated retrieval of events.

- **GET /api/events**
  - Description: Retrieve events with pagination.
  - Query Parameters:
    - `page` (optional): Page number for pagination.
    - `limit` (optional): Number of events per page.

### /api/participants

This route handles operations related to participants.

- **POST /api/participants**
  - Description: Register a participant for an event.
  - Middleware: `isEmptyBody` to check if the request body is empty.
  - Controller: `participantsCtr.createParticipant` to handle the registration logic.

- **GET /api/participants/:id**
  - Description: Retrieve all participants registered for an event.
  - Controller: `participantsCtr.getAllParticipants` to handle retrieving the participants.

## Technologies Used

```json
{
  "name": "appevents-back",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "cross-env NODE_ENV=production node ./server.js",
    "start:dev": "cross-env NODE_ENV=development nodemon ./server.js",
    "test": "cross-env NODE_ENV=test jest"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "cross-env": "^7.0.3",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "joi": "^17.13.1",
    "mongoose": "^8.3.4",
    "morgan": "^1.10.0"
  },
  "devDependencies": {
    "nodemon": "^3.1.0"
  }
}
```

## Scripts

- `start` - Start the application in production mode.
- `start:dev` - Start the application in development mode using nodemon.
- `test` - Run tests using Jest.

## Installation and Running

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd appevents-back
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start in development mode:
    ```bash
    npm run start:dev
    ```

4. Start in production mode:
    ```bash
    npm run start
    ```

5. Run tests:
    ```bash
    npm test
    ```

## Middleware

- **isEmptyBody**: Middleware to check if the request body is empty.

## Project Contribution

This project was developed using modern tools and libraries to ensure robust backend functionality. The use of Express and other libraries enables efficient handling of HTTP requests and database interactions.

We hope this backend service meets your needs for managing events and participants. If you have any questions or suggestions, please contact us.
