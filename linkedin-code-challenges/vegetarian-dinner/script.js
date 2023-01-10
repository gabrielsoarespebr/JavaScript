// Menu
const dishes = [
    {
        name: "Vegetarian Burrito Bowl with Avocado Crema",
        vegetarian: true
    },
    {
        name: "Chicken 65",
        vegetarian: false
    },
    {
        name: "Curried Pumpkin Soup",
        vegetarian: true
    },
    {
        name: "Tofu Lettuce Wraps",
        vegetarian: true
    },
    {
        name: "Lentil Soup with Quinoa and Mushrooms",
        vegetarian: true
    },
    {
        name: "Malabar Fish Biryani",
        vegetarian: false
    },
    {
        name: "Hyderabadi Chicken Fry",
        vegetarian: false
    },
]

const ol = document.createElement("ol");

const menu = document.querySelector("#menu");

menu.append(ol);

// Load menu function - Used when the page load and when checkbox is unchecked
const loadList = () => {
    ol.innerHTML = "";

    dishes.forEach(e => {

        const li = document.createElement("li");

        if (e.vegetarian) {
            li.innerHTML = `<img class="vegetarianIcon" src="http://cdn.shopify.com/s/files/1/0605/1466/4695/collections/Vegetarian.png?v=1645629962" alt="Vegetarian icon">${e.name}`;
            li.style.cssText = "color: green";
        }
        else li.textContent = e.name;

        ol.append(li);
    })
}

// Load menu when the page load
loadList();

const vegetarianOnly = document.querySelector("#vegetarianOnly");

// "Show vegetarian only" checkbox
vegetarianOnly.addEventListener("change", function () {

    if (this.checked) {
        ol.innerHTML = "";

        const vegetarianDishes = dishes.filter(e => e.vegetarian === true);

        vegetarianDishes.forEach(e => {

            const li = document.createElement("li");

            li.innerHTML = `<img class="vegetarianIcon" src="http://cdn.shopify.com/s/files/1/0605/1466/4695/collections/Vegetarian.png?v=1645629962" alt="Vegetarian icon">${e.name}`;
            li.style.cssText = "color: green";

            ol.append(li);
        })
    }
    else {
        loadList(); // Load menu when checkbox is unchecked
    }
})

const registerButton = document.querySelector("#registerButton");

// Register new dish
registerButton.addEventListener("click", function (e) {
    e.preventDefault();

    const dishName = document.querySelector("#dishName").value;
    const isVegetarian = document.querySelector("#isVegetarian").checked;

    const newDish = {
        name: dishName,
        vegetarian: isVegetarian
    }

    dishes.push(newDish);

    // Load menu with new dish
    loadList();

})