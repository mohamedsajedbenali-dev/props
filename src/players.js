// Array that holds all player data
// Each object represents ONE player
const players = [
  {
    // Full name of the player
    name: "Kenma kozume",

    // Team the player currently plays for
    team: "Nekoma",

    // Player's nationality
    nationality: "Japanese",

    // Jersey number worn by the player
    jerseyNumber: 5,

    // Player's age
    age: 17,

    // Path to the player's image (stored in the public folder)
    image: "/kenma.jpg",
  },
  {
    name: "Lev Haiba ",
    team: "Nekoma",
    nationality: "Russian",
    jerseyNumber: 11,
    age: 16,
    image: "/lev.jpg",
  },
  {
    name: "tsukishima kei",
    team: "Karasuno",
    nationality: "Japanese",
    jerseyNumber: 11,
    age: 16,
    image: "/tsu.jpg",
  },
  {
    name: "Tobio Kageyama",
    team: "Karasuno",
    nationality: "Japanese",
    jerseyNumber: 9,
    age: 15,
    image: "/tobi.jpg",
  },
];

// Export the players array so it can be imported in App.jsx
// Example: import players from "./players";
export default players;