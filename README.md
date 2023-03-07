# Supplier Information Upload

This a project built as part of the interview process for Rundoo. [Requirement Link](https://you.ashbyhq.com/rundoo/assignment/7b62bf0f-8788-4e7f-a4a3-90603a2f765d)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a web application for managing supplier details. It allows users to create a new supplier by providing their name, logo, and address.

The application is built using the following technologies:

- React (front-end)
- TypeScript (front-end)
- Flask (back-end)
- SQLite (database)

## Installation

To install the application, follow these steps:

1. Clone the repository to your local machine:
    ```
    git clone https://github.com/VincentChen0111/Supplier_Info.git
    ```
2. Prepare the environments: Node.js ; Python3 ; SQLite3

3. Install the required dependencies for the front-end and back-end:
    ```
    npm install
    pip install -r requirements.txt
    ```


## Development Build

To start the development application, follow these steps:

1. Start the front-end development server:
    ```
    npm start
    ```
This will start the React development server on port 3000.

2. Start the back-end development server:
    ```
    python ./server/server.py
    ```


This will start the Flask development server on port 8080.

3. Open a web browser and navigate to `http://localhost:3000` to use the application.

## Production Build

To build the application for production, follow these steps:

1. Build the front-end code:
    ```
    npm run build
    ```

2. Run the production front-end by code:
    ```
    npx serve -s build
    ```

## Usage

1. The front-end provides a web form for submitting supplier info. This info will be posted to the server side and stored in the sqlite database (./server/database/Supplier.db)
2. The back-end checks if the logo is correctly an image icon, accept and store in ./server/logos for vaild check, reject otherwise. Note the name of logo will be renamed to the unique company id assigned by the database management.
3. To check the database, it is suggested to use the DB Browser(SQLite)

