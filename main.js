console.log('Hello Pets!');

// Array of objects
const pets = [
    {
    Image: 'https://pixfeeds.com/images/dogs/1280-595752112-happy-dog.jpg',
    Name: 'Max',
    Color: 'black',
    SpecialSkill: '"Rolling Over"',
    TypeOfPet: 'dog',
    },

    {
    Image: 'https://www.felineliving.net/wp-content/uploads/2018/05/Male-grey-cat-names-300x200.jpg',
    Name: 'Otis',
    Color: 'gray',
    SpecialSkill: '"Sleeping"',
    TypeOfPet: 'cat',
    },

    {
    Image: 'https://img.freepik.com/free-photo/green-chameleon-branch_73152-1609.jpg?size=626&ext=jpg',
    Name: 'Tom',
    Color: 'green',
    SpecialSkill: '"Ability to change color"',
    TypeOfPet: 'chameleon',
    },

    {
    Image: 'https://usercontent2.hubstatic.com/13844081_f520.jpg',
    Name: 'Rex',
    Color: 'spotted',
    SpecialSkill: '"Hunting"',
    TypeOfPet: 'dog',
    },

    {
    Image: 'http://www.sporcle.com/blog/wp-content/uploads/2018/10/1-58.jpg',
    Name: 'Emmy',
    Color: 'black',
    SpecialSkill: '"Affectionate"',
    TypeOfPet: 'cat',
    },

    {
    Image: 'https://i.ytimg.com/vi/ioblgpA5eTo/maxresdefault.jpg',
    Name: 'Jimmy',
    Color: 'blue',
    SpecialSkill: '"Fly Catcher"',
    TypeOfPet: 'chameleon',
    }
]

// Create printToDom function - takes two parameters - - (only have to create once)
// The divID is a parameter that I'm passing in; a string that represents the ID of the div I plan to output to.
// The textToPrint parameter is my string that I want to display on the screen
const printToDom = (divID, textToPrint) => {
    // Creating a variable to set a reference for the ID I'm creating - - "setting a placeholder"
    const containerId = document.getElementById(divID);
    // Takes the information within the ID's html and sets it equal "textToPrint"
    containerId.innerHTML = textToPrint;
};

// create second function - Pass an array as a parameter
const buildCard = (arr) => {
    // create an open variable so we can reference the domString outside of the for loop
    let domString = '';
    // create for loop to iterate over the parameter
    for (let i = 0; i < arr.length; i++) {
        // building the domString
        domString += `
        <div class='petList'>
            <div class='animalName'>
            <h2>${arr[i].Name}</h2>
            </div>
        <img src=${arr[i].Image}></img>
        <p>${arr[i].Color}</p>
        <p>${arr[i].SpecialSkill}</p>
            <div class='animalType'>
            <p>${arr[i].TypeOfPet}</p>
            </div>
        </div>
        `
    }
    // Calling printToDom
    // Passing in petList, a string, that represents the divID
    // Passing in domString, a variable representing a string
    printToDom('petList', domString)
}

// Creating another function to filter animals
// e stands for the details of the event
const filterAnimals = (e) => {
    // create an empty array to give me a container to put in filtered animals
    let animals = []
    // just seeing if it worked and to see the event listener details
    console.log(e.target.id);
    // running loop to iterate over parameter
    for (let i = 0; i < pets.length; i++) {
        // measuring to see if conditional meets test
        if (e.target.id === pets[i].TypeOfPet) {
            // if statement is true add animal to the correct value
            animals.push(pets[i]);
        }

    }
    // calling the function and passing the animals array to run
    buildCard(animals);
}

// const init = () => {
//     buildCard(pets);
//     activateEvents()
// }

// creating variable to gain control of when the event listeners are activated
const activateEvents = () => {
    document.getElementById('dog').addEventListener('click', filterAnimals)
    document.getElementById('cat').addEventListener('click', filterAnimals)
    document.getElementById('chameleon').addEventListener('click', filterAnimals)
    // added additional function to bring all pets back; not filtering
    document.getElementById('all').addEventListener('click', () => {
        buildCard(pets)
    })
}

// init();

// calling the function to activate listeners
activateEvents();


