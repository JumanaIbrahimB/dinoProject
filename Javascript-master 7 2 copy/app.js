const click = document.getElementById('btn');
click.addEventListener('click', addData, removeForm);
const compareForm = document.getElementById('dino-compare');
const grid = document.getElementById('grid');
const factsBtn = document.getElementById('factsBtn');
const moreFacts = document.getElementById('facts');
document.getElementById('factsBtn').style.visibility = 'hidden'; // to hide facts button from the form


const Dinos = [
    {
        "species": "Triceratops",
        "weight": 13000,
        "height": 114,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "First discovered in 1889 by Othniel Charles Marsh"
    },
    {
        "species": "Tyrannosaurus Rex",
        "weight": 11905,
        "height": 144,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "The largest known skull measures in at 5 feet long."
    },
    {
        "species": "Anklyosaurus",
        "weight": 10500,
        "height": 55,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Anklyosaurus survived for approximately 135 million years."
    },
    {
        "species": "Brachiosaurus",
        "weight": 70000,
        "height": "372",
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Jurasic",
        "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
    },
    {
        "species": "Stegosaurus",
        "weight": 11600,
        "height": 79,
        "diet": "herbavor",
        "where": "North America, Europe, Asia",
        "when": "Late Jurasic to Early Cretaceous",
        "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
    },
    {
        "species": "Elasmosaurus",
        "weight": 16000,
        "height": 59,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
    },
    {
        "species": "Pteranodon",
        "weight": 44,
        "height": 20,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
    },
    {
        "species": "Pigeon",
        "weight": 0.5,
        "height": 9,
        "diet": "herbavor",
        "where": "World Wide",
        "when": "Holocene",
        "fact": "All birds are living dinosaurs." 
    }
];


// Create Dino Constructor
function Dino(species, weight, height, diet, where, when, fact) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;

};

// Create Dino Objects

const dinoObject = function (dinosaur) {
    return {
        species: dinosaur.species,
        weight: dinosaur.weight,
        height: dinosaur.height,
        diet: dinosaur.diet,
        where: dinosaur.where,
        when: dinosaur.when,
        fact: dinosaur.fact
    }
};

// Create Human Object
const Human = function () {
    let human = addData();
    return {
        "name" : human.name,
        "species": "human",
        "weight": human.weight,
        "height": human.height,
        "diet": human.diet,
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Most Intellagnce species has ever stepped on earth ."
    }

};

// Use IIFE to get human data from form

function addData() {
    name = document.getElementById('name').value;
    height = Number(document.getElementById('feet').value * 12) || Number(document.getElementById('inches').value);
    weight = Number(document.getElementById('weight').value);
    diet = document.getElementById('diet').value;

    return { name , height , weight , diet } ;
}

//const Human = Object.create(arrayAdd);


// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches. 
function compareWeight() {
    return `${this.weight} weight is= ${this.weight} and ${species.name} weight is= ${species.weight}`;
}
// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
function compareHeight() {
    return `${this.species} height is= ${this.height} and ${species.name} height is= ${species.height_inches}`;
}
// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
function compareDeit() {
    return `${this.species} diet is= ${this.diet} and ${species.name} diet is= ${species.diet}`;
}


// facts - got it from -> amnh.org/dinosaurs/dinosaur-facts

//facts array
let dinoFacts = ['Dinosaurs are a group of reptiles that have lived on Earth for about 245 million years',
    'Dinosaur fossils have been found on all seven continents.',
    'All non-avian dinosaurs went extinct about 66 million years ago.',
    'There are roughly 700 known species of extinct dinosaurs.',
    'Modern birds are a kind of dinosaur because they share a common ancestor with non-avian dinosaurs.',
    'In 1842, the English naturalist Sir Richard Owen coined the term Dinosauria, derived from the Greek deinos, meaning “fearfully great,” and sauros, meaning “lizard.”'
];

// function to get random fact
function getRandomFact(){

factsBtn.addEventListener('click', () =>{

    let fact = dinoFacts[Math.floor(Math.random() * dinoFacts.length)];
    moreFacts.innerHTML = fact;
})}
getRandomFact();


function Default() {
    compareForm.addEventListener('submit', (event) => {

        event.preventDefault();

    })
}
Default();

// Generate Tiles for each Dino in Array
function insertObject(dino_Array, HumanObject) {

    // appending object to the center of array
    dino_Array.splice(4, 0, HumanObject);

    console.log(dino_Array);
}

// Add tiles to DOM

// Remove form from screen

function removeForm() {

    document.getElementById('factsBtn').style.visibility = 'visible'; // to show the facts button
    
    // call the function
    insertObject(Dinos, Human());

    compareForm.remove();

    Dinos.forEach(function (data) {
        let name = data.name ? data.name : data.species ;
        let text = `${name} <br> <img src="./images/${data.species.toLowerCase()}.png" /> <br> ${data.fact}`
        const box = document.createElement('div');
        box.innerHTML = text ;
        grid.appendChild(box).className = "grid-item";

    });
}

// On button click, prepare and display infographic
