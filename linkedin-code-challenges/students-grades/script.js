// sort, reverse, find, findIndex
const students = [
    { name: "John", grade: 75 },
    { name: "Jane", grade: 93 },
    { name: "Samantha", grade: 90 },
    { name: "Michael", grade: 94 },
];

// Sort students in descending grade order
students.sort((a, b) => (b.grade) - (a.grade));
console.log("Descending grade order:", students);

// Reverse to ascending order
students.reverse();
console.log("Ascending grade order:", students);

// Find a student who has a grade over 90
const studentOver90Obj = students.find(e => (e.grade > 90));
console.log("Student who has a grade over 90:", studentOver90Obj.name);
studentOver90Index = students.findIndex(e => e.grade > 90);
console.log("Student index who has a grade over 90:", studentOver90Index);