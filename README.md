# E-commerce API

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)

## Introduction

This E-commerce API provides a RESTful interface for managing products. Built with Node.js and MongoDB, the API supports various CRUD operations and is designed for scalability and efficient data retrieval.

## Features

- CRUD operations for products.
- Automatic ID generation for products.
- Robust error handling.

## Tech Stack

- Node.js
- MongoDB
- Express

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js v14.x.x or above
- MongoDB v4.x.x or above
- npm v6.x.x or above

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Mrjha2014/ecommerce-api.git
   ```
2. **Navigate to the directory**

   ```bash
   cd ecommerce-api
   ```
3. **Install dependencies**

   ```bash
   npm install
   ```
4. **Set Environment Variables**

   Rename `.env.example` to `.env` and fill in the required environment variables.

   ```bash
   cp .env.example .env
   ```
5. **Start MongoDB**

   ```bash
   mongod
   ```
6. **Start the server**

   ```bash
   npm start
   ```

## Usage

The server will start at `http://localhost:3000/`. Use Postman or a similar tool to interact with the API.

## API Endpoints

### Create a New Product

**URL**: `http://localhost:3000/products/create`

**Method**: `POST`

**Request Payload**:

```json
{  
  data: { 
  "name": "Sample Product",
  "quantity": 10
}
  }
```

**Response**:

```json
{ 
  data: { 
  "product": {
    "name": "Sample Product",
    "quantity": 10
  }
 } 
}
```

### List All Products

**URL**: `http://localhost:3000/products`

**Method**: `GET`

**Response**:

```json
{
 data: { 
  "products": {
    {
      "id": "1",
      "name": "Sample Product 1",
      "quantity": 10
    },
    {
      "id": "2",
      "name": "Sample Product 2",
      "quantity": 5
    }
    }
  }
}
```

### Get a Product by ID

**URL**: `http://localhost:3000/products/:id`

**Method**: `GET`

**Response**:

```json
{
  data: {
  "product": {
    "name": "Sample Product",
    "quantity": 10
      }
  }
}
```

### Update Product Quantity

- **URL**: `/products/:id/update_quantity/?number=10`
- **Method**: `POST`
- **Request Payload**:
- **Success Response**:

  ```json
  {
    data: {
    "product": {
      "id": "1",
      "name": "Sample Product 1",
      "quantity": 20
    },
    "message": "updated successfully"
    }

  }
  ```

### Delete a Product

- **URL**: `/products/:id`
- **Method**: `DELETE`
- **Success Response**:

  ```json
  {
   data: {
       "message": "product deleted"
      }
  }
  ```

## Contributing

If you would like to contribute to this project, please fork the repository, create a feature branch, and submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Acknowledgments

- Node.js Foundation
- MongoDB Inc.
- Express.js Community
