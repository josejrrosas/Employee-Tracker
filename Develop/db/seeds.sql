INSERT INTO departments (dept_name)
VALUES  ("Sales"),
        ("Engineering"), 
        ("Finance"), 
        ("Legal");

INSERT INTO roles (title, salary, dept_id, )
VALUES  ("Sales Lead", 100000, 0001)
        ("Salesperson", 80000, 0001)
        ("Lead Engineer", 150000, 0002)
        ("Software Engineer", 120000, 0002)
        ("Account Manager", 160000, 0003)
        ("Accountant", 125000, 0003)    
        ("Legal Team Lead", 250000, 0004)
        ("Lawyer", 190000, 0004);
       
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Juniper", "Lee", 1000, null)
       ("Kyle", "Sheppard", 1001, 1000)
       ("Rebecca", "Jones", 2000, null)
       ("Don", "Mattingly", 2002, 2000)
       ("Michael", "Young", 3000, null)
       ("Lauren", "Richie", 3003, 3000)
       ("Robert", "Johnson", 4000, null)
       ("Leroy", "Jenkins", 4004, 4000);

