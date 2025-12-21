class Pet {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }

    makeSound() {
        console.log(`I am a ${this.species}`);
    }
}

class Dog extends Pet {
    constructor(name, age, breed, favoriteToy) {
        super(name, age, 'Dog');
        this.breed = breed;
        this.favoriteToy = favoriteToy;
    }

    fetch() {
        console.log(`Bruno is fetching its ${this.favoriteToy}`);
    }
}

class Cat extends Pet {
    constructor(name, age, color, favoriteNapSpot) {
        super(name, age, 'Cat');
        this.color = color;
        this.favoriteNapSpot = favoriteNapSpot;
    }

    purr() {
        console.log(`Paws purrs on the ${this.favoriteNapSpot}`);
    }
}



// const pet = new Pet('Teri', 10, 'Bird');
// pet.makeSound(); // I am a Bird


// // Dog(name, age, breed, favoriteToy);
// // Constructor can assume the `species` as 'Dog'
// const dog = new Dog('Bruno', 7, 'Spaniel', 'tennis ball');
// dog.makeSound(); // I am a Dog
// dog.fetch();  // Bruno is fetching its tennis ball


// const cat = new Cat('Paws', 2, 'black and white', 'mat')
// cat.makeSound()  // I am a Cat
// cat.purr()  // Paws purrs on the mat