CREATE DATABASE Checkout;

USE Checkout;

CREATE TABLE sales (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  name VARCHAR,
  password VARCHAR,
  email VARCHAR,
  line1 VARCHAR,
  line2 VARCHAR,
  city VARCHAR,
  state VARCHAR,
  zipcode INT,
  card INT,
  expiry DATE,
  cvv INT,
  billingZip INT
