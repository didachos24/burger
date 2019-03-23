-- Create database for burgers
CREATE DATABASE burgers_db;

USE burgers_db;

-- Table for burgers
CREATE TABLE burgers(
    -- Id as primary key
    id INTEGER AUTO_INCREMENT,

    burger_name VARCHAR(30),

    -- Determines burger status
    devoured BOOLEAN,

    PRIMARY KEY (id)
)