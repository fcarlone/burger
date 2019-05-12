-- Create Database
DROP DATABASE burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create table
CREATE TABLE burgers (
  id INTEGER NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(50) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY(id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('test this', false);
INSERT INTO burgers (burger_name) VALUES ('test the orm');
INSERT INTO burgers (burger_name) VALUES ("test string");
select * from burgers_db.burgers;
