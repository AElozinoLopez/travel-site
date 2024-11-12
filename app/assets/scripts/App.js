import '../styles/styles.css'
import Person from './modules/Person'

/* This line of code is for hot module replacement. */
if (module.hot) {
    module.hot.accept()
}

/* function person(name, favColor) {
    console.log("Hello, my name is " + name + "and my favorite color is " + favColor + ".");
} */

// The below example is great when only one method is to be used.
/*
let elozino = {
    name: "Elozino Lopez",
    favoriteColor: "blue",
    greet: function() {
        console.log("Hello, my name is " + elozino.name + " and my favorite color is " + elozino.favoriteColor + ".");
    }
}

elozino.greet();
*/

// If more than one method is required in an object then use a Constructor function as below:
/*
function Person(fullName, favColor) {    
    this.name = fullName;
    this.favoriteColor = favColor;
    this.greet = function() {
        console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
    }
}
*/

var elozino = new Person("Elozino Lopez", "red");
elozino.greet();

var chinwe = new Person("Chinwe Elozino-Lopez", "glo-green");
chinwe.greet();

/*person(elozino.name, elozino.favoriteColor);
person("Chinwe Elozino-Lopez", "glo green"); */