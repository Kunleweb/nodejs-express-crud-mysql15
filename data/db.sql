-- Create the database if it doesn't already exist
CREATE DATABASE IF NOT EXISTS customersdb
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- Switch to the newly created database
USE customersdb;

-- Create the 'customer' table with relevant fields and constraints
CREATE TABLE IF NOT EXISTS customer (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,   -- Unique customer ID
  name VARCHAR(50) NOT NULL,                    -- Customer's full name
  address VARCHAR(100) NOT NULL,                -- Customer's address
  phone VARCHAR(15)                             -- Optional: phone number
);

-- View all tables in the current database
SHOW TABLES;

-- View the structure of the 'customer' table
DESCRIBE customer;
