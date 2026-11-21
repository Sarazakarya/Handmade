import slider1 from "@/assets/images/slider-1.png";
import slider2 from "@/assets/images/slider-2.png";
import slider3 from "@/assets/images/slider-3.png";
export const SliderData = [
  {
    image: slider1,
    firstTitle: "LITTLE DETAILS",
    SecondTitle: "BIG WARMTH",
    description: "Unique handmade creations designed to make everyday moments a little more special ",
  },
  {
    image: slider2,
    firstTitle: "Made With Yarn,",
    SecondTitle: "Made For You",
    description: "Discover beautifully handcrafted crochet creations for every moments and every home",
  },
  {
    image: slider3,
    firstTitle: "Little Details,",
    SecondTitle: "Big Warmth.",
    description: "Thoughtfully handcrafted pieces that bring comfort and charm to your space",
  },
];


export const imageVariants = [
  {
    initial: { opacity: 0, x: -80 },
    active: { opacity: 1, x: 0, y: 0, scale: 1 },
    exit: { opacity: 0, x: 80 },
  },
  {
    initial: { opacity: 0, scale: 1.25 },
    active: { opacity: 1, x: 0, y: 0, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  },
  {
    initial: { opacity: 0, y: -80 },
    active: { opacity: 1, x: 0, y: 0, scale: 1 },
    exit: { opacity: 0, y: 80 },
  },
  {
    initial: { opacity: 0, x: 120 },
    active: { opacity: 1, x: 0, y: 0, scale: 1 },
    exit: { opacity: 0, x: -120 },
  },
];

export const textVariants = [
  {
    initial: { opacity: 0, x: -60 },
    active: { opacity: 1, x: 0, y: 0, scale: 1 },
    exit: { opacity: 0, x: -60 },
  },
  {
    initial: { opacity: 0, y: 40 },
    active: { opacity: 1, x: 0, y: 0, scale: 1 },
    exit: { opacity: 0, y: 40 },
  },
  {
    initial: { opacity: 0, scale: 0.9 },
    active: { opacity: 1, x: 0, y: 0, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  },
  {
    initial: { opacity: 0, x: 60 },
    active: { opacity: 1, x: 0, y: 0, scale: 1 },
    exit: { opacity: 0, x: 60 },
  },
];
