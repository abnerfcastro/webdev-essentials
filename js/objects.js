/* Working with objects in JS
 * 
 * Let's create an object to model an employee
 * employee
 *      - first name
 *      - last name
 *      - birthdate
 *      - admission date
 *      - department
 *      - has children?
 */

// Object Structure
// {
// 	    stringProperty: "value",
// 	    numericProperty: 0,
// 	    booleanProperty: true,
// 	    arrayProperty: [1, 2, 3],
// 	    objectProperty: {
// 		    aaaa: aaaa,
// 		    aaaa: aaaa
// 	    }
// }

(function() {
    // HOW TO CREATE A NEW OBJECT?
    
    // Natural/Native Way
    var employee_natural = {
        firstname: "John",
        lastname: "Doe",
        birthdate: new Date(1969, 8, 14),
        admissionDate: new Date(1998, 10, 23),
        hasChildren: false,
        display: function() {
            console.log(this);
        }
    }

    employee_natural.display();

    // Empty objects
    var employee_empty = new Object();
    employee_empty.firstname = "Leopold",
    employee_empty.lastname = "Fitz",
    employee_empty.birthdate = new Date(1987, 2, 10),
    employee_empty.admissionDate = new Date(2016, 11, 15),
    employee_empty.hasChildren = false,
    employee_empty.display = function() {
        console.log(this);
    }

    employee_empty.display();

    // Constructor Function
    function employeeConstructor(firstname, lastname, birthdate, admissionDate, hasChildren) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthdate = birthdate;
        this.admissionDate = admissionDate;
        this.hasChildren = hasChildren;
        this.display = function() {
            console.log(this);
        }
    }

    var employeeWithConstructor = new employeeConstructor("Jack", "Bauer", new Date(1975, 10, 28), new Date(2001, 7, 19), true);
    employeeWithConstructor.display();

    // Possibly the best approach
    var newEmployeeConstructor = function(firstname, lastname, birthdate, admissionDate, hasChildren) {
        return {
            firstname: firstname,
            lastname: lastname,
            birthdate: birthdate,
            admissionDate: admissionDate,
            hasChildren, hasChildren,
            display: function() { 
                console.log(this);
            }
        }
    }

    var employeeWithNewConstructor = newEmployeeConstructor("John", "Doe", new Date(1980, 9, 20), new Date(2000, 12, 15), true);
    employeeWithNewConstructor.display();
    
})();