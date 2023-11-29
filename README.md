# Project Title

## Overview

This project is a simple login application where registered users can log in and add more users to the database. It's built using Laravel for the backend, MySQL for the database, and React for the frontend.

## Technologies Used

- Laravel
- MySQL
- React

## Prerequisites

Ensure you have the following installed before setting up the project:

- Node.js
- Composer
- MySQL

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/kmnczr/php_login.git
    ```

2. Navigate to the project directory:

    ```bash
    cd your-repository
    ```

3. Install Laravel dependencies:

    ```bash
    composer install
    ```

4. Install React dependencies:

    ```bash
    npm install
    ```

5. Configure the `.env` file with your database credentials.

6. Run migrations to create the necessary tables:

    ```bash
    php artisan migrate
    ```

7. Start the development server:

    ```bash
    php artisan serve
    ```

8. In a separate terminal, start the React app:

    ```bash
    npm start
    ```
9. Navigate to login-backend and run this command to create your first user in the database:

    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"email": "your_email", "password": "your_password"}' http://127.0.0.1:8000/api/users
    ```

## Usage

1. Access the application in a web browser at `http://localhost:3000`.
2. Log in with your credentials.
3. Explore the features, such as adding new users to the database.

## Contact

For any inquiries or feedback, please contact [Kristóf Minczér] at [minczerkristof@gmail.com].

