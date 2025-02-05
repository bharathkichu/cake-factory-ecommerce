import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.jpg";
import p24_img from "./product_24.jpg";
import p25_img from "./product_25.jpg";
import p26_img from "./product_26.jpg";
import p27_img from "./product_27.jpg";
import p28_img from "./product_28.jpg";
import p29_img from "./product_29.jpg";
import p30_img from "./product_30.jpg";
import p31_img from "./product_31.jpg";
import p32_img from "./product_32.jpg";


let all_products = [
  {
    id: 1,
    name: "Tiramisu",
    category: "ourcakes",
    image: p1_img,
    new_price: 1500,
    old_price: 1700,
  },
  {
    id: 2,
    name: "Blueberry Velvet",
    category: "ourcakes",
    image: p2_img,
    new_price: 1500,
    old_price: 1700,
  },
  {
    id: 3,
    name: "Ferrero Rocher cake",
    category: "ourcakes",
    image: p3_img,
    new_price: 2400,
    old_price: 2600,
  },
  {
    id: 4,
    name: "Mont-Blanc",
    category: "ourcakes",
    image: p4_img,
    new_price: 1800,
    old_price: 2000,
  },
  {
    id: 5,
    name: "Hazelnut Chocolate Truffle",
    category: "ourcakes",
    image: p5_img,
    new_price: 1400,
    old_price: 1600,
  },
  {
    id: 6,
    name: "Mild Chocolate",
    category: "ourcakes",
    image: p6_img,
    new_price: 900,
    old_price: 1100,
  },
  {
    id: 7,
    name: "New york cheese cake",
    category: "ourcakes",
    image: p7_img,
    new_price: 1200,
    old_price: 1400,
  },
  {
    id: 8,
    name: "Oreo Chocolate Truffle",
    category: "ourcakes",
    image: p8_img,
    new_price: 1400,
    old_price: 1600,
  },
  {
    id: 9,
    name: "Red Velvet cheese mousse",
    category: "ourcakes",
    image: p9_img,
    new_price: 1500,
    old_price: 1700,
  },
  {
    id: 10,
    name: "Six Pack Caramel",
    category: "ourcakes",
    image: p10_img,
    new_price: 1500,
    old_price: 1700,
  },
  {
    id: 11,
    name: "Almond Top",
    category: "ourcookies",
    image: p11_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 12,
    name: "Black Forest",
    category: "ourcookies",
    image: p12_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 13,
    name: "Bourbon Cookies",
    category: "ourcookies",
    image: p13_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 14,
    name: "Butter Cookies",
    category: "ourcookies",
    image: p14_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 15,
    name: "Cashew Rock",
    category: "ourcookies",
    image: p15_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 16,
    name: "Chilli Cheese",
    category: "ourcookies",
    image: p16_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 17,
    name: "Coconut Crunch",
    category: "ourcookies",
    image: p17_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 18,
    name: "Masala Cookies",
    category: "ourcookies",
    image: p18_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 19,
    name: "Peanut Cookies",
    category: "ourcookies",
    image: p19_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 20,
    name: "Pineapple",
    category: "ourcookies",
    image: p20_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 21,
    name: "Sweet & Salt",
    category: "ourcookies",
    image: p21_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 22,
    name: "Vanilla Jam",
    category: "ourcookies",
    image: p22_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 23,
    name: "10 Famous Traditional Snacks from Trivandrum Worth Eating",
    category: "blog",
    image: p23_img,
  },
  {
    id: 24,
    name: "Banana Chips are Superbly Yummy!",
    category: "blog",
    image: p24_img,
  },
  {
    id: 25,
    name: "Best Halwa Varieties in Trivandrum | Bread Factory Sweets",
    category: "blog",
    image: p25_img,
  },
  {
    id: 26,
    name: "Chocolate Dew : A Chocolate Explosion",
    category: "blog",
    image: p26_img,
  },
  {
    id: 27,
    name: "Sink in delicious Chocolate Poke Cake",
    category: "blog",
    image: p27_img,
  },
  {
    id: 28,
    name: "Cookies to Steal your Heart",
    category: "blog",
    image: p28_img,
  },
  {
    id: 29,
    name: "Devour the Ambrosial at your Doorstep with Online Cake Delivery!",
    category: "blog",
    image: p29_img,
  },
  {
    id: 30,
    name: "South India’s Ghee Sweets Affair: 8 Traditional Desserts That Are Scrumptious",
    category: "blog",
    image: p30_img,
  },
  {
    id: 31,
    name: "The Divine Black Forest Gateau!",
    category: "blog",
    image: p31_img,
  },
  {
    id: 32,
    name: "The wonder cookie from Italy",
    category: "blog",
    image: p32_img,
  },
];

export default all_products;