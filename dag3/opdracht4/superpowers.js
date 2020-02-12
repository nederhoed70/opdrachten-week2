const superHeroes = [
    {
      "name": "Batman",
      "publisher": "DC Comics",
      "alter_ego": "Bruce Wayne",
      "first_appearance": "Detective Comics #27",
      "weight": "210"
    },
    {
      "name": "Superman",
      "publisher": "DC Comics",
      "alter_ego": "Kal-El",
      "first_appearance": "Action Comics #1",
      "weight": "220"
    },
    {
      "name": "Flash",
      "publisher": "DC Comics",
      "alter_ego": "Jay Garrick",
      "first_appearance": "Flash Comics #1",
      "weight": "195"
    },
    {
      "name": "Green Lantern",
      "publisher": "DC Comics",
      "alter_ego": "Alan Scott",
      "first_appearance": "All-American Comics #16",
      "weight": "186"
    },
    {
      "name": "Green Arrow",
      "publisher": "DC Comics",
      "alter_ego": "Oliver Queen",
      "first_appearance": "All-American Comics #16",
      "weight": "195"
    },
    {
      "name": "Wonder Woman",
      "publisher": "DC Comics",
      "alter_ego": "Princess Diana",
      "first_appearance": "The Incredible Hulk #180",
      "weight": "165"
    },
    {
      "name": "Blue Beetle",
      "publisher": "DC Comics",
      "alter_ego": "Dan Garret",
      "first_appearance": "Mystery Men Comics #1",
      "weight": "145"
  },
  {
      "name": "Spider Man",
      "publisher": "Marvel Comics",
      "alter_ego": "Peter Parker",
      "first_appearance": "Amazing Fantasy #15",
      "weight": "167"
  },
  {
      "name": "Captain America",
      "publisher": "Marvel Comics",
      "alter_ego": "Steve Rogers",
      "first_appearance": "Captain America Comics #1",
      "weight": "220"
  },
  {
      "name": "Iron Man",
      "publisher": "Marvel Comics",
      "alter_ego": "Tony Stark",
      "first_appearance": "Tales of Suspense #39",
      "weight": "250"
  },
  {
      "name": "Thor",
      "publisher": "Marvel Comics",
      "alter_ego": "Thor Odinson",
      "first_appearance": "Journey into Myster #83",
      "weight": "200"
  },
  {
      "name": "Hulk",
      "publisher": "Marvel Comics",
      "alter_ego": "Bruce Banner",
      "first_appearance": "The Incredible Hulk #1",
      "weight": "1400"
  },
  {
      "name": "Wolverine",
      "publisher": "Marvel Comics",
      "alter_ego": "James Howlett",
      "first_appearance": "The Incredible Hulk #180",
      "weight": "200"
  },
  {
      "name": "Daredevil",
      "publisher": "Marvel Comics",
      "alter_ego": "Matthew Michael Murdock",
      "first_appearance": "Daredevil #1",
      "weight": "200"
  },
  {
      "name": "Silver Surfer",
      "publisher": "Marvel Comics",
      "alter_ego": "Norrin Radd",
      "first_appearance": "The Fantastic Four #48",
      "weight": "unknown"
    }
  ]
  //1. Maak een array van alle superhelden namen
const heroesNames = (array) => array.map(element => element.name);
console.log(heroesNames(superHeroes));
//2. Maak een array van alle "lichte" superhelden (< 190 pounds)
const lightWeights = (array) => array.filter(element => element.weight < 190);
console.log(lightWeights(superHeroes));
//3. Maak een array met de namen van de superhelden die 200 pounds wegen
const twoHunderedPounds = (array) => array.filter(element => element.weight == 200).map((names) => names.name);
console.log(twoHunderedPounds(superHeroes));
//4. Maak een array met alle comics waar de superhelden hun "first appearances" hebben gehad
const firstAppearance = (array) => array.filter(element => element.first_appearance).map((appearances) => appearances.first_appearance);
console.log(firstAppearance(superHeroes));
// Maak een array met alle superhelden van DC Comics. 
// Is dat gelukt? Herhaal de bovenstaande functie dan en maak ook een array met alle superhelden van Marvel Comics.
console.log(firstAppearance(superHeroes.filter(element => element.publisher == 'Marvel Comics')));
// Tel het gewicht van alle superhelden van DC Comics bij elkaar op. 
// Let op! Conditionals to the rescue! 
// Het gewicht dat je ziet in de movieDatabase, van welk datatype is dat? Een nummer? Of een string? 
//Oh ja, en hebben alle superhelden wel een gewicht? 
const totalWeight = (array, pub) => array.filter(element => element.publisher == pub && element.weight !== 'unknown').map((hero) => parseInt(hero.weight)).reduce((total,value) => (total + value));
console.log(totalWeight(superHeroes, 'Marvel Comics'));
console.log(totalWeight(superHeroes, 'DC Comics'));

//8. Bonus: zoek de zwaarste superheld!
const heaviestHero = (array) => {
    const onlyNumbers = (numbers) => numbers.filter(element => element.weight !== 'unknown').map(element => parseInt(element.weight));

    const heavyWeight = onlyNumbers(array).reduce(reducer = (last,current, index, reducer) => last > current ? last : current);
    // STUCK: const heroName = (array) => array.map(element => element.name, element.weight === heavyWeight(element));
    //return heroName(array);
    return heavyWeight;

}
    console.log(heaviestHero(superHeroes));
//console.log(superHeroes.length);
