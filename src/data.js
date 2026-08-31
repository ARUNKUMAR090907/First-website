import c1 from './assets/h1.webp';
import c2 from './assets/h2.webp';
import c3 from './assets/h3.webp';
import c4 from './assets/h4.webp';
import c5 from './assets/h5.webp';
import c6 from './assets/h6.webp';
import c7 from './assets/h7.webp';
import c8 from './assets/h8.webp';
import c9 from './assets/h9.webp';
import c10 from './assets/h10.webp';
import c11 from './assets/h11.webp';
import c12 from './assets/h12.webp';
import c13 from './assets/el1.webp';
import c14 from './assets/el12.webp';
import c15 from './assets/el3.webp';
import c16 from './assets/el4.webp';
import c17 from './assets/el5.webp';
import c18 from './assets/el6.webp';

const data = [
    {
        "id": 1,
        "name": "Crimson Spark Velvet",
        "img": c1,
        "wt": "1kg",
        "pri": 599,
        "category": "Red Velvet",
        "rating": 4.9,
        "reviews": 128,
        "isPremium": true,
        "desc": "Rich dark crimson sponge layered with smooth silky cream cheese frosting and edible gold dusting."
    },
    {
        "id": 2,
        "name": "Triple Chocolate Truffle",
        "img": c2,
        "wt": "2kg",
        "pri": 899,
        "category": "Chocolate",
        "rating": 5.0,
        "reviews": 210,
        "isPremium": true,
        "desc": "Indulgent Dutch cocoa layers drenched in belgian dark chocolate ganache and chocolate curls."
    },
    {
        "id": 3,
        "name": "Royal Hazelnut Rocher",
        "img": c3,
        "wt": "1.5kg",
        "pri": 799,
        "category": "Premium",
        "rating": 4.8,
        "reviews": 94,
        "isPremium": true,
        "desc": "Roasted hazelnuts blended with crispy wafer layers and luscious Nutella chocolate cream."
    },
    {
        "id": 4,
        "name": "Berry Vanilla Bliss",
        "img": c4,
        "wt": "1.5kg",
        "pri": 749,
        "category": "Berry & Fruit",
        "rating": 4.7,
        "reviews": 85,
        "isPremium": false,
        "desc": "Soft Madagascar vanilla bean cake loaded with fresh strawberries and wild raspberry compote."
    },
    {
        "id": 5,
        "name": "Golden Caramel Opera",
        "img": c5,
        "wt": "1.5kg",
        "pri": 849,
        "category": "Premium",
        "rating": 4.9,
        "reviews": 112,
        "isPremium": true,
        "desc": "Almond sponge soaked in espresso syrup with butter salted caramel buttercream and chocolate glaze."
    },
    {
        "id": 6,
        "name": "Matcha Green Tea Spark",
        "img": c6,
        "wt": "1.5kg",
        "pri": 699,
        "category": "Celebration",
        "rating": 4.6,
        "reviews": 64,
        "isPremium": false,
        "desc": "Authentic Japanese ceremonial grade matcha sponge balanced with light sweet cream."
    },
    {
        "id": 7,
        "name": "Classic Black Forest",
        "img": c7,
        "wt": "1.5kg",
        "pri": 649,
        "category": "Chocolate",
        "rating": 4.8,
        "reviews": 178,
        "isPremium": false,
        "desc": "Traditional German recipe with dark cherries, whipped cream frosting and chocolate shavings."
    },
    {
        "id": 8,
        "name": "Mango Passion Delight",
        "img": c8,
        "wt": "1.5kg",
        "pri": 729,
        "category": "Berry & Fruit",
        "rating": 4.9,
        "reviews": 98,
        "isPremium": false,
        "desc": "Fresh Alphonso mango pulp infused into delicate chiffon cake with passion fruit glaze."
    },
    {
        "id": 9,
        "name": "Lotus Biscoff Crunch",
        "img": c9,
        "wt": "1.5kg",
        "pri": 899,
        "category": "Cheesecake",
        "rating": 5.0,
        "reviews": 245,
        "isPremium": true,
        "desc": "Creamy baked cheesecake topped with Lotus speculoos spread and crushed caramelized biscuits."
    },
    {
        "id": 10,
        "name": "Blueberry Cheesecake Spark",
        "img": c10,
        "wt": "1.5kg",
        "pri": 799,
        "category": "Cheesecake",
        "rating": 4.8,
        "reviews": 136,
        "isPremium": false,
        "desc": "Rich New York style cream cheese cake crowned with tangy blueberry compote."
    },
    {
        "id": 11,
        "name": "Choco Fudge Supreme",
        "img": c11,
        "wt": "1.5kg",
        "pri": 699,
        "category": "Chocolate",
        "rating": 4.7,
        "reviews": 102,
        "isPremium": false,
        "desc": "Dense fudge cake frosted with thick warm chocolate ganache and roasted almonds."
    },
    {
        "id": 12,
        "name": "Strawberry Shortcake Spark",
        "img": c12,
        "wt": "1.5kg",
        "pri": 749,
        "category": "Berry & Fruit",
        "rating": 4.8,                                              
        "reviews": 89,
        "isPremium": false,
        "desc": "Fluffy sponge cake filled with chantilly cream and sliced organic strawberries."
    },
    {
        "id": 13,
        "name": "Saffron Pistachio Royal",
        "img": c13,
        "wt": "1.5kg",
        "pri": 949,
        "category": "Premium",
        "rating": 5.0,
        "reviews": 167,
        "isPremium": true,
        "desc": "Kashmiri saffron infused sponge studded with crushed Iranian pistachios and cardamom cream."
    },
    {
        "id": 14,
        "name": "Belgian Mousse Spark",
        "img": c14,
        "wt": "1.5kg",
        "pri": 829,
        "category": "Chocolate",
        "rating": 4.9,
        "reviews": 142,
        "isPremium": true,
        "desc": "Light melt-in-the-mouth Belgian dark chocolate mousse on a crunchy praline base."
    },
    {
        "id": 15,
        "name": "Pineapple Breeze Spark",
        "img": c15,
        "wt": "1.5kg",
        "pri": 549,
        "category": "Berry & Fruit",
        "rating": 4.6,
        "reviews": 115,
        "isPremium": false,
        "desc": "Refreshing tropical pineapple slices in soft vanilla sponge with whipped cream."
    },
    {
        "id": 16,
        "name": "Red Ribbon Celebration",
        "img": c16,
        "wt": "1.5kg",
        "pri": 899,
        "category": "Celebration",
        "rating": 4.9,
        "reviews": 180,
        "isPremium": true,
        "desc": "Grand multi-tier celebration cake styled with elegant sugar ribbons and white chocolate roses."
    },
    {
        "id": 17,
        "name": "Dark Lava Spark",
        "img": c17,
        "wt": "1.5kg",
        "pri": 799,
        "category": "Chocolate",
        "rating": 4.8,
        "reviews": 92,
        "isPremium": false,
        "desc": "Warm chocolate cake with a molten oozing center of pure Belgian dark chocolate."
    },
    {
        "id": 18,
        "name": "Unicorn Fantasy Spark",
        "img": c18,
        "wt": "1.5kg",
        "pri": 899,
        "category": "Celebration",
        "rating": 5.0,
        "reviews": 215,
        "isPremium": true,
        "desc": "Vibrant rainbow tier cake topped with pastel frosting swirls and gold magical horn."
    }
];

export default data;