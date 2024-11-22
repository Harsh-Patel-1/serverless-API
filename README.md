<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# User Notification Preferences API

A serverless API built with Nest.js for managing user notification preferences and sending notifications. The API supports CRUD operations for user preferences, notification delivery simulation, and logging.

---

## Table of Contents

1. [Features](#features)
2. [Setup Instructions](#setup-instructions)
3. [Deployment Instructions](#deployment-instructions)
4. [Environment Variables](#environment-variables)
5. [API Documentation](#api-documentation)
6. [Postman Collection](#postman-collection)
7. [License](#license)

---

## Features

- User preferences management (CRUD operations).
- Notification delivery simulation.
- Logging and retrieval of notification logs.
- Basic statistics tracking.
- MongoDB integration with Mongoose.
- Input validation with `class-validator`.
- Fully serverless deployment on Vercel or AWS Lambda.

---

## Setup Instructions

### Prerequisites

1. **Node.js**: Install [Node.js](https://nodejs.org/) (v16 or higher).
2. **MongoDB**: Ensure access to a MongoDB database (e.g., MongoDB Atlas).
3. **Git**: Install Git for version control.

---

### Steps

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd user-notification-api
   ```

2. Install dependencies:

```bash
  npm install
```

3. Create a .env file in the root directory and configure the environment variables as described here.

4. Run the application locally:

```bash
npm run start
```

5. Test the API at http://localhost:3000.

6. Run unit and integration tests:

```bash
npm run test
```

## Deployment Instructions

### Vercel Deployment

1. Install the Vercel CLI (if not already installed):

```bash
npm install -g vercel
```

2. Login to Vercel:

```bash
vercel login
```

3. Deploy the application:

```bash
vercel
```

4. Set environment variables on Vercel:

   -Go to Project Settings > Environment Variables in the Vercel Dashboard.
   -Add the variables described here.

# API Documentation

## Base URL

-Local: http://localhost:3000
-Production: https://<your-vercel-domain>.vercel.app

## Endpoints

1. User Preferences
   Create Preferences

- POST /api/preferences
- Request Body:

```json
{
  "userId": "user123",
  "email": "user@example.com",
  "preferences": {
    "marketing": true,
    "newsletter": false,
    "updates": true,
    "frequency": "weekly",
    "channels": {
      "email": true,
      "sms": false,
      "push": true
    }
  },
  "timezone": "America/New_York"
}
```

-Response

```json
{
  "message": "Preferences created successfully.",
  "data": {
    /* Created preference object */
  }
}
```

Get Preferences

-GET /api/preferences/:userId
-Response:

```json
{
  "data": {
    /* User preferences object */
  }
}
```

Update Preferences

-PATCH /api/preferences/:userId
-Request Body:

```json
{
  "preferences": {
    "marketing": false,
    "newsletter": true,
    "updates": true,
    "frequency": "monthly",
    "channels": {
      "email": false,
      "sms": true,
      "push": true
    }
  }
}
```

-Response

```json
{
  "message": "Preferences updated successfully."
}
```

Delete Preferences

-DELETE /api/preferences/:userId
-Response:

```json
{
  "message": "Preferences deleted successfully."
}
```

2. . Notifications
   Send Notification

   -POST /api/notifications/send
   -Request Body:

   ```json
   {
     "userId": "user123",
     "type": "marketing",
     "channel": "email",
     "content": {
       "subject": "Special Offer",
       "body": "Check out our latest deals!"
     }
   }
   ```

- Response:

```json
{
  "message": "Notification sent successfully.",
  "data": {
    /* Notification details */
  }
}
```

### Get Notification Logs

- GET /api/notifications/:userId/logs
- Response:

```json
[
  {
    "userId": "user123",
    "type": "marketing",
    "channel": "email",
    "status": "sent",
    "sentAt": "2024-11-21T12:00:00.000Z"
  }
]
```

### Get Notification Stats

- GET /api/notifications/stats
- Response:

```json
{
  "totalNotificationsSent": 100,
  "notificationsByType": {
    "marketing": 50,
    "newsletter": 30,
    "updates": 20
  }
}
```

## Postman Collection (Optional)

You can download and import the Postman collection for this API:

1. Save the Postman collection JSON file as postman_collection.json in the project root.
2. Import it into Postman to test the API endpoints.

## Stay in touch

- Author - [Harsh Patel](https://github.com/Harsh-Patel-1)
<<<<<<< HEAD

=======
- Attach the [Postman collection](https://api.postman.com/collections/32768522-f4746d27-3486-4dca-8dd8-163cdd9776b6?access_key=PMAT-01JD7DZQ67YY41JP4J5GA9Q21C) to the project if available.
>>>>>>> 1b70da4 (Initial commit)
