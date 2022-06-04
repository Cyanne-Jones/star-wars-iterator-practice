// run npm test star-wars-iterator-practice-test.js to start test!

const chai = require("chai");
const expect = chai.expect;
const prompts = require('./star-wars-iterator-practice.js');

describe('Star Wars Prompts', () => {

  it.skip('Should get Tatooine Critters', () => {
    const e = prompts.getTatooineCritters()
      expect(e).to.deep.equal([
            {
              name: 'Anakin Skywalker',
              species: 'human',
              birthYear: 41,
              homePlanet: 'Tatooine'
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
            }
          ]);
  });

  it.skip('Should get critters born before the fall of the Republic', () => {
    const e = prompts.getRepublicCritters();
    expect(e).to.deep.equal([
          'Anakin Skywalker',
          'Obi Wan Kenobi',
          'Mission Vao',
          'Grogu',
          'Bastila Shan',
          'Jabba Desilijic Tiure',
          'Chewbacca',
          'Boba Fett',
          'Padme Amidala'
        ]);
  });

  it.skip('Should get non-human Outer Rim critters', () => {
    const e = prompts.getNonHumanOuterRimCritters();
    expect(e).to.deep.equal([
          {
            name: 'Mission Vao',
            species: 'twilek',
            birthYear: 3970,
            homePlanet: 'Taris'
          },
          {
            name: 'Jabba Desilijic Tiure',
            species: 'hutt',
            birthYear: 600,
            homePlanet: 'Tatooine'
          }
        ]);
  });

  it.skip('Should get planets and their inhabitants', () => {
    const e = prompts.getPlanetsAndInhabitants();
    expect(e).to.deep.equal({
        Coruscant: [],
        Talravin: [ 'Bastila Shan' ],
        Alderaan: [ 'Leia Skywalker' ],
        Manaan: [],
        Jakku: [],
        Exegol: [],
        Stewjon: [ 'Obi Wan Kenobi' ],
        'Rakata Prime': [],
        Tatooine: [ 'Anakin Skywalker', 'Jabba Desilijic Tiure', 'Luke Skywalker' ],
        Kamino: [ 'Boba Fett' ],
        Korriban: [],
        Telos: [],
        Taris: [ 'Mission Vao' ],
        Naboo: [ 'Padme Amidala' ],
        Kashyyk: [ 'Chewbacca' ]
      });
  });
});