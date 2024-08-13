"use client";
import { useState } from "react";
import SearchBar from "./components/SearchBar";

const products = [
  {
    id: 1,
    name: "Smartphone XYZ",
    price: 299.99,
    description:
      "A high-performance smartphone with a sleek design and advanced features.",
    imageUrl: "https://picsum.photos/id/1/300/300",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 89.99,
    description:
      "Comfortable wireless headphones with noise-canceling technology and long battery life.",
    imageUrl: "https://picsum.photos/id/25/300/300",
  },
  {
    id: 3,
    name: "Smartwatch Pro",
    price: 199.99,
    description:
      "A versatile smartwatch with fitness tracking, notifications, and customizable watch faces.",
    imageUrl: "https://picsum.photos/id/30/300/300",
  },
  {
    id: 4,
    name: "Laptop Pro 15",
    price: 1299.99,
    description:
      "A powerful laptop with a 15-inch display, high-speed processor, and ample storage.",
    imageUrl: "https://picsum.photos/id/40/300/300",
  },
  {
    id: 5,
    name: "4K Ultra HD TV",
    price: 799.99,
    description:
      "A 55-inch 4K Ultra HD TV with vibrant colors and sharp resolution for an immersive viewing experience.",
    imageUrl: "https://picsum.photos/id/100/300/300",
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 49.99,
    description:
      "Portable Bluetooth speaker with high-quality sound and long battery life.",
    imageUrl: "https://picsum.photos/id/150/300/300",
  },
  {
    id: 7,
    name: "Gaming Console",
    price: 399.99,
    description:
      "Next-gen gaming console with stunning graphics and a vast library of games.",
    imageUrl: "https://picsum.photos/id/200/300/300",
  },
  {
    id: 8,
    name: "Digital Camera",
    price: 599.99,
    description:
      "High-resolution digital camera with advanced features for professional photography.",
    imageUrl: "https://picsum.photos/id/250/300/300",
  },
  {
    id: 9,
    name: "Fitness Tracker",
    price: 99.99,
    description:
      "Wearable fitness tracker with heart rate monitoring and activity tracking.",
    imageUrl: "https://picsum.photos/id/300/300/300",
  },
  {
    id: 10,
    name: "E-Reader",
    price: 129.99,
    description:
      "Lightweight e-reader with a high-resolution display and long battery life.",
    imageUrl: "https://picsum.photos/id/350/300/300",
  },
  {
    id: 11,
    name: "Smart Home Hub",
    price: 149.99,
    description:
      "Central hub for controlling smart home devices with voice commands.",
    imageUrl: "https://picsum.photos/id/400/300/300",
  },
  {
    id: 12,
    name: "Electric Scooter",
    price: 499.99,
    description:
      "Eco-friendly electric scooter with a long range and fast charging.",
    imageUrl: "https://picsum.photos/id/450/300/300",
  },
  {
    id: 13,
    name: "VR Headset",
    price: 299.99,
    description:
      "Immersive VR headset with high-resolution display and motion tracking.",
    imageUrl: "https://picsum.photos/id/500/300/300",
  },
  {
    id: 14,
    name: "Portable Projector",
    price: 199.99,
    description:
      "Compact portable projector with high brightness and HD resolution.",
    imageUrl: "https://picsum.photos/id/550/300/300",
  },
  {
    id: 15,
    name: "Smart Thermostat",
    price: 179.99,
    description:
      "Energy-efficient smart thermostat with remote control and scheduling.",
    imageUrl: "https://picsum.photos/id/600/300/300",
  },
];

export default function Home() {
  const [sort, setSort] = useState(true); // true is for low to high

  return (
    <main className="p-5">
      <h1 className="text-3xl font-bold mb-5">Welcome to our store</h1>
      <div className=" flex justify-around text-black">
        <SearchBar />
      </div>
      <section className="grid px-10 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((prod) => (
          <div key={prod.id} className="bg-white shadow-lg rounded-lg">
            <div className="relative w-full h-64 overflow-hidden">
              <img
                src={prod.imageUrl}
                alt={prod.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl text-blue-500 font-bold mb-2">
                {prod.name}
              </h2>
              <p className="text-gray-600 mb-2">{prod.description}</p>
              <p className="text-lg font-bold text-green-400">
                ${prod.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
