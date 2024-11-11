import '../styles/styles.css'

/* This line of code is for hot module replacement. */
if (module.hot) {
    module.hot.accept()
}

/* function person(name, favColor) {
    console.log("Hello, my name is " + name + "and my favorite color is " + favColor + ".");
} */

let elozino = {
    name: "Elozino Lopez",
    favoriteColor: "blue",
    greet: function() {
        console.log("Oh hello!");
    }
}

elozino.greet();

/*person(elozino.name, elozino.favoriteColor);
person("Chinwe Elozino-Lopez", "glo green"); */