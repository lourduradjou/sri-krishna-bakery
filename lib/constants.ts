import {
  CakeSlice,
  Croissant,
  Cookie,
  Sandwich,
  Coffee,
  Pizza,
  Phone,
  MapPin,
  Clock3,
} from "lucide-react";

import {
  Wheat,
  ChefHat,
  HeartHandshake,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const CATEGORIES = [
  {
    title: "Cakes",
    icon: CakeSlice,
    image: "/categories/cakes.jpg",
  },
  {
    title: "Pastries",
    icon: Croissant,
    image: "/categories/pastries.jpg",
  },
  {
    title: "Cookies",
    icon: Cookie,
    image: "/categories/cookies.jpg",
  },
  {
    title: "Snacks",
    icon: Sandwich,
    image: "/categories/snacks.jpg",
  },
  {
    title: "Beverages",
    icon: Coffee,
    image: "/categories/beverages.jpg",
  },
  {
    title: "Pizza",
    icon: Pizza,
    image: "/categories/pizza.jpg",
  },
];

export const BEST_SELLERS = [
  {
    name: "Black Forest Cake",
    image: "/products/cake.jpg",
  },
  {
    name: "Veg Puff",
    image: "/products/puff.jpg",
  },
  {
    name: "Cream Bun",
    image: "/products/bun.jpg",
  },
  {
    name: "Chocolate Donut",
    image: "/products/donut.jpg",
  },
];

export const CONTACT_INFO = {
  phone: "+91 98765 43210",
  address: "123 Bakery Street, Puducherry",
  hours: "Everyday • 7:00 AM - 9:30 PM",
};

export const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "#",
  },
  {
    name: "Facebook",
    href: "#",
  },
  {
    name: "WhatsApp",
    href: "#",
  },
];

export const CONTACT_DETAILS = [
  {
    icon: Phone,
    title: "Phone",
    value: CONTACT_INFO.phone,
  },
  {
    icon: MapPin,
    title: "Address",
    value: CONTACT_INFO.address,
  },
  {
    icon: Clock3,
    title: "Working Hours",
    value: CONTACT_INFO.hours,
  },
];

export const FEATURES = [
  {
    icon: Wheat,
    title: "Fresh Ingredients",
    description:
      "We use carefully selected ingredients to ensure freshness and quality in every bite.",
  },
  {
    icon: ChefHat,
    title: "Expert Bakers",
    description:
      "Our experienced bakers prepare every product with passion and attention to detail.",
  },
  {
    icon: Cookie,
    title: "Wide Variety",
    description:
      "Choose from breads, cakes, pastries, cookies, snacks and much more.",
  },
  {
    icon: HeartHandshake,
    title: "Made With Care",
    description:
      "Every order is prepared with love to bring smiles to our customers every day.",
  },
];

export const GALLERY_IMAGES = [
  {
    src: "/gallery/gallery-1.jpg",
    alt: "Fresh cakes",
  },
  {
    src: "/gallery/gallery-2.jpg",
    alt: "Bakery interior",
  },
  {
    src: "/gallery/gallery-3.jpg",
    alt: "Fresh bread",
  },
  {
    src: "/gallery/gallery-4.jpg",
    alt: "Pastries",
  },
  {
    src: "/gallery/gallery-5.jpg",
    alt: "Cookies",
  },
  {
    src: "/gallery/gallery-6.jpg",
    alt: "Snacks",
  },
];