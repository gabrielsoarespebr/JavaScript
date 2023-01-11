const foodOptions = (foods) => {
    const flatFoods = foods.flat();

    const options = new Set();

    flatFoods.forEach(e => options.add(e));

    return options;
}

const foods = [["pizza", "pasta"], ["burguer", "pizza"], ["sushi", "calzone"], ["pasta", "sushi"]];

console.log(foodOptions(foods));