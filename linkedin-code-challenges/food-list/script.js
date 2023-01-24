// push, pop, unshift and shift
const foods = [
    { food: "raspberries", type: "fruit" },
    { food: "orange", type: "fruit" },
    { food: "broccoli", type: "vegetable" },
    { food: "quinoa", type: "grain" }
];

const blackBeans = { food: "black beans", type: "legume" };

const chiaSeeds = { food: "chia seeds", type: "seed" };

console.log("Food list:", foods);

// Remove the last item
foods.pop();
console.log("Last item removed:", foods);

// Remove the first item
foods.shift();
console.log("First item removed:", foods);

// Add black beans to the beginning
foods.unshift(blackBeans);
console.log("Black beans added to the beginning:", foods);

// Add chia seeds to the end
foods.push(chiaSeeds);
console.log("Chia seeds added to the end:", foods);