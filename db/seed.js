const db = require("../models");
const bcrypt = require("bcryptjs");

const products = [
    { name: "Git Las Hermanas",
      image: "https://images.unsplash.com/photo-1548777384-87d81d8ada40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      description: "Medium roast, fair trade certified. Satifsying creamy texture that delivers milk chocolate sweetness." ,
      price: 17.99
},
{
    name: "Git Italian Roast",
    image: "https://images.unsplash.com/photo-1548777384-87d81d8ada40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    description: "Masterfully balanced, slow roasted resulting in bold flavors.",
    price: 15.99
},
{
    name: "Git House Blend",
    image: "https://images.unsplash.com/photo-1548777384-87d81d8ada40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    description: "Latin American blend to introduce you to our tasteful Git brand flavor.",
    price: 13.99
},
{
    name: "Git Lit Espresso",
    image: "https://images.unsplash.com/photo-1548777384-87d81d8ada40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    description: "Are you looking for a good time? Try these espresso beans for a highly caffienated experience.",
    price: 21.99
},
{
    name: "French Roast",
    image: "https://images.unsplash.com/photo-1548777384-87d81d8ada40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    description: "Powerful, rich coffee with smoky burnt caramel overtones.",
    price: 13.99
},
{
    name: "Guatemalan Mocha Java",
    image: "https://images.unsplash.com/photo-1548777384-87d81d8ada40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    description: "From the best Antigua farm with a rich, refined cocao dark roast taste,",
    price: 14.99
},
{
    name: "Cafe Sumatra",
    image: "https://images.unsplash.com/photo-1548777384-87d81d8ada40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    description: "With a earthy caramel full body taste, and pleasant herbal dark roast approach.",
    price: "18.99"
},
{
    name: "Organic Morning Blend",
    image: "https://images.unsplash.com/photo-1548777384-87d81d8ada40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    description: "A lively, awakening taste for a nice, smooth transition into the beginning of your day.",
    price: "17.99"
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





