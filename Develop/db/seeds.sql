INSERT INTO departments (dept_name)
VALUES  ("Sales"),
        ("Engineering"), 
        ("Finance"), 
        ("Legal");

INSERT INTO roles (title, salary, dept_id)
VALUES  ("Sales Lead", 100000, 01),
        ("Salesperson", 80000, 01),
        ("Lead Engineer", 150000, 02),
        ("Software Engineer", 120000, 02),
        ("Account Manager", 160000, 03),
        ("Accountant", 125000, 03)    ,
        ("Legal Team Lead", 250000, 04),
        ("Lawyer", 190000, 04);
       
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Juniper", "Lee", 1, null),
       ("Kyle", "Sheppard", 2, 1),
       ("Rebecca", "Jones", 3, null),
       ("Don", "Mattingly", 4, 3),
       ("Michael", "Young", 5, null),
       ("Lauren", "Richie", 6, 5),
       ("Robert", "Johnson", 7, null),
       ("Leroy", "Jenkins", 8, 7);

