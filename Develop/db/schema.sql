-- DROP DATABASE
DROP DATABASE IF EXISTS business_db;

-- CREATE DATABASE
CREATE DATABASE business_db;

USE business_db;

DROP TABLE IF EXISTS departments;
CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  dept_name VARCHAR(30) NOT NULL
);

DROP TABLE IF EXISTS roles;
CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  dept_id TEXT NOT NULL,
  FOREIGN KEY (dept_id) REFERENCES departments(id) ON DELETE SET NULL
);

DROP TABLE IF EXISTS employees;
CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL
  last_name VARCHAR(30) NOT NULL
  role_id INT NOT NULL
  manager_id INT NOT NULL
  FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE SET NULL
);

