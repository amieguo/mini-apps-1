
DROP DATABASE IF EXISTS checkout;
CREATE database checkout;

USE checkout;
-- create table with cols id, item, quantity
DROP TABLE IF EXISTS purchase;
CREATE TABLE purchase (
    id INT AUTO_INCREMENT PRIMARY KEY,
    personname TEXT,
    email TEXT,
    pwd TEXT,
    shipaddress TEXT,
    creditcard INT

);
-- insert three test values
-- INSERT INTO purchase (personname) VALUES ("Joe"), ("Smoe");