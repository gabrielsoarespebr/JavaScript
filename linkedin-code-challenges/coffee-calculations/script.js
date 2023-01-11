const coffeeOrdered = [2, 3, 1, 5];

const coffeePrice = 2.15;

const totalCoffees = coffeeOrdered.reduce((sum, number) => sum += number);

const totalBill = coffeePrice * totalCoffees;

console.log("The total bill is $", totalBill);