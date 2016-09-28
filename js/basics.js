/*
 * Author: Abner Castro
 * Description: Enhanced Hello World to learn the basics of JS
 * Date: September 25th, 2016
 */

// Immediately-invoked function expression
(function() {
    
    // Basic Hello World
    console.log("Hello World!");

    skipLine = function() {
        // Skips a line
        console.log("\n");
    }

    // variables
    var myName = "Abner";
    var myAge = 24;
    var smoker = false;
    var myself = {name: "Abner", age: 24, isSmoker: false};

    skipLine();

    console.log("Content of variable 'myName' is", myName);
    console.log("Content of variable 'myAge'  is", myAge);
    console.log("Content of variable 'smoker' is", smoker);
    console.log("Content of variable 'myself' is", myself);

    skipLine();    
    
    console.log("Type of variable 'myName' is", typeof myName);
    console.log("Type of variable 'myAge'  is", typeof myAge);
    console.log("Type of variable 'smoker' is", typeof smoker);
    console.log("Type of variable 'myself' is", typeof myself);

    skipLine();  

    var array = [{name: "Rita", age: 40, isSmoker: false},
                 {name: "John", age: 15, isSmoker: true},
                 {name: "Emma", age: 28, isSmoker: true}];

    console.log("This is an array of objects ==>", array);

    skipLine();

    for (var i = 0; i < array.length; i++) {
        
        // Prints information on the person
        console.log("Object:", array[i]);

        // Checks if person is a smoker
        if (array[i].isSmoker)
            console.log(array[i].name, "is a smoker");
        else
            console.log(array[i].name, "is not a smoker");

        switch (array[i].name) {
            case "Emma":
                console.log("We found Emma!");
                break;
            default:
                console.log("Sorry,", array[i].name, "is not the person we are looking for.")
        }

        skipLine();
    }

    // Removing 'Emma' from the array
    var emma = array.pop();
    console.log(emma.name, "was removed.");
    console.log("This is the array now =>", array, "\n");

    // Creating 'Daisy' and adding her to the array
    var daisy = {name: "Daisy", age: 22, isSmoker: false};
    array.push(daisy);

    console.log("Added Daisy to the array.")
    console.log("This is the array now =>", array, "\n");

    // Sort the array by age
    array.sort(function(a, b) {
        // When a is older than b
        if (a.age > b.age)
            return 1;
        
        // When b is older than a
        if (b.age > a.age)
            return -1;

        // They must be the same age
        return 0;
    });
    console.log("Sorting the array by age:");
    console.log("This is the array now =>", array, "\n");

    // Using 'foreach'
    console.log("These are the names of the people inside the array:");
    array.forEach(function(elem, i, array) {
        console.log(elem.name);
    });
    
    skipLine();

    // Filter non-smokers    
    var nonsmokers = array.filter(function(elem) {
        return !elem.isSmoker;
    });
    console.log("These are the people who don't smoke =>", nonsmokers);
    
    skipLine();    

    // Playing with strings
    var sentence = "This is a sentence that will be split.";
    var words = sentence.split(' ');

    console.log("Whole sentence:", sentence);
    console.log("Split sentence:", words);

    // Remove word split and insert joint
    // 'split' is at index 7, so...
    words.splice(7, 1, "joint.");

    console.log("After splice..:", words);
    console.log("Joint sentence:", words.join(' '));  
    
})();