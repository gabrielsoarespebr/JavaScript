// includes, some and every
const bowlingScores = [154, 204, 300, 184, 286];

// Does the array of bowling scores include a 300?
console.log("Do bowling scores include 300?", bowlingScores.includes(300));

// Are some of the scores under 150?
console.log("There are scores under 150?", bowlingScores.some(e => e < 150));

// Is every score an even number?
console.log("Is every score an even number?", bowlingScores.every(e => (e % 2) === 0));