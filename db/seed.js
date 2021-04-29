const db = require("../models");
const bcrypt = require("bcryptjs");

const products = [
    { name: "For Loopin Cold Brew",
      image: "https://www.grownupdish.com/wp-content/uploads/2018/08/Square-close-up-decaf-cold-brew.jpg",
      description: "Medium roast, fair trade certified. Satifsying creamy texture that delivers milk chocolate sweetness." ,
      price: 17.99
},
{
    name: "Algorithmic Roasted Latte",
    image: "https://www.torani.com/sites/default/files/styles/torani_syrup_recipe_detail/public/recipes/illustration/Torani%20Latte.jpg?itok=jexRGteW",
    description: "Masterfully balanced, slow roasted resulting in bold flavors.",
    price: 15.99
},
{
    name: "Debuggin Mocha Frappe",
    image: "https://www.whiskaffair.com/wp-content/uploads/2018/07/Nutella-Iced-Coffee-1-3-300x300.jpg",
    description: "Latin American blend to introduce you to our tasteful Git brand flavor.",
    price: 13.99
},
{
    name: "Git Lit Cappuccino",
    image: "https://lh3.googleusercontent.com/proxy/KG9iZasvMBuycobtDBSnenVLOIQcu-o2saVBIJhVdH546P-ZesTW8z9n-F7r1NUYYxHoeTtKuXBqkmvRM1CrsCZcvvSxxsO2-g7dqDh6DRzeg_h7_ApK-w",
    description: "Are you looking for a good time? Try these espresso beans for a highly caffienated experience.",
    price: 21.99
}
];



const guestUser =  {
        email: "guestuser",
        password: "test1234",
}


const run = async function run() {
    try {
        await db.Product.deleteMany({});
        await db.User.deleteMany({});
        const createdProducts = await db.Product.insertMany(products);
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(guestUser.password, salt);
        guestUser.password = hash
        const createdGuestUser = await db.User.create(guestUser);
        

        console.log("Seed finished");
        process.exit();
    } catch (err) {
        console.log(err);
    }
};

run();





