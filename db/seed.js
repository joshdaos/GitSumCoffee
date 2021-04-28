const db = require("../models");
const bcrypt = require("bcryptjs");

const products = [
    { name: "Git Las Hermanas",
      image: "https://www.clearbags.com/media/catalog/product/cache/d43c9ecf208a5da92b3916d7b6b66fea/z/i/zipper-pouches-with-valves-zbgm2mbv-1.jpg",
      description: "Medium roast, fair trade certified. Satifsying creamy texture that delivers milk chocolate sweetness." ,
      price: 17.99
},
{
    name: "Git Italian Roast",
    image: "https://www.clearbags.com/media/catalog/product/cache/d43c9ecf208a5da92b3916d7b6b66fea/z/i/zipper-pouches-with-valves-zbgm2mbv-1.jpg",
    description: "Masterfully balanced, slow roasted resulting in bold flavors.",
    price: 15.99
},
{
    name: "Git House Blend",
    image: "https://www.clearbags.com/media/catalog/product/cache/d43c9ecf208a5da92b3916d7b6b66fea/z/i/zipper-pouches-with-valves-zbgm2mbv-1.jpg",
    description: "Latin American blend to introduce you to our tasteful Git brand flavor.",
    price: 13.99
},
{
    name: "Git Lit Espresso",
    image: "https://www.clearbags.com/media/catalog/product/cache/d43c9ecf208a5da92b3916d7b6b66fea/z/i/zipper-pouches-with-valves-zbgm2mbv-1.jpg",
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





