// Welcome to Star Wars iterator practice!!

// Just a quick note: I tried as hard as I could to keep this as accurate as possible. Please don't fight me if I got something wrong. 🙏🏼
// These are measured in Taco Bell Sauce spiciness levels: mild, hot, fire, and diablo.

// ALSO!! 
// Everyone's birthdays are measrured in BBY! (Before the Battle of Yavin) 
// Because of this, the dates go backwards (like BC in our timeline), so the bigger the number, the earlier the critter was born!

// May the force be with you.

const galaxy = {
  coreWorlds: ['Coruscant', 'Talravin', 'Alderaan'],
  innerRim: ['Manaan', 'Jakku'],
  unknownRegions: ['Exegol', 'Stewjon', 'Rakata Prime'],
  outerRim: ['Tatooine', 'Kamino', 'Korriban', 'Telos', 'Taris'],
  midRim: ['Naboo', 'Kashyyk']
};

const critters = [
  {
    name: 'Anakin Skywalker',
    species: 'human',
    birthYear: 41,
    homePlanet: 'Tatooine'
  },
  {
    name: 'Obi Wan Kenobi',
    species: 'human',
    birthYear: 57,
    homePlanet: 'Stewjon'
  },
  {
    name: 'Mission Vao',
    species: 'twilek',
    birthYear: 3970,
    homePlanet: 'Taris'
  },
  {
    name: 'Grogu',
    species: null,
    birthYear: 41,
    homePlanet: null
  },
  {
    name: 'Bastila Shan',
    species: 'human',
    birthYear: 3900,
    homePlanet: 'Talravin'
  },
  {
    name: 'Jabba Desilijic Tiure',
    species: 'hutt',
    birthYear: 600,
    homePlanet: 'Tatooine'
  },
  {
    name: 'Luke Skywalker',
    species: 'human',
    birthYear: 19,
    homePlanet: 'Tatooine'
  },
  {
    name: 'Leia Skywalker',
    species: 'human',
    birthYear: 19,
    homePlanet: 'Alderaan'
  },
  {
    name: 'Chewbacca',
    species: 'wookie',
    birthYear: 200,
    homePlanet: 'Kashyyk'
  },
  {
    name: 'Boba Fett',
    species: 'human',
    birthYear: 32,
    homePlanet: 'Kamino'
  },
  {
    name: 'Padme Amidala',
    species: 'human',
    birthYear: 46,
    homePlanet: 'Naboo'
  }
];

// ~~~PROMPTS~~~

// FIRST PROMPT (mild)
// Return an array of all critters from Tatooine
// ex: [
//   {
//     name: 'Anakin Skywalker',
//     species: 'human',
//     birthYear: 41,
//     homePlanet: 'Tatooine'
//   },
//   {
//     name: 'Jabba Desilijic Tiure',
//     species: 'hutt',
//     birthYear: 600,
//     homePlanet: 'Tatooine'
//   },
//   {
//     name: 'Luke Skywalker',
//     species: 'human',
//     birthYear: 19,
//     homePlanet: 'Tatooine'
//   }
// ];

// CODE GOES HERE


// SECOND PROMPT (Hot)
// Return an array of the names of critters born before the Republic fell in 19 BBY
// ex: 
// [
//   'Anakin Skywalker',
//   'Obi Wan Kenobi',
//   'Mission Vao',
//   'Grogu',
//   'Bastila Shan',
//   'Jabba Desilijic Tiure',
//   'Chewbacca',
//   'Boba Fett',
//   'Padme Amidala'
// ]

