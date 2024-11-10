import '../styles/styles.css'

/* This line of code is for hot module replacement. */
if (module.hot) {
    module.hot.accept()
}

function person(name, favColor) {
    console.log("Hello, my name is " + name + "and my favorite color is " + favColor + ".");
}

let elozinoName = "Elozino Lopez";
let elozinoFavColor = "blue";

person(elozinoName, elozinoFavColor);
person("Chinwe Elozino-Lopez", "glo green");