"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Define the type for a blog
interface Blog {
  date: string;
  title: string;
  description: string;
  imageUrl: string;
  fullDescription: string[];
}

export default function BlogPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState<Blog | null>(null);

  // Blog data
  const blogs: Blog[] = [
    {
      date: "06/04/2024",
      title: "Gardening for Beginners",
      description: `Starting a garden can be a rewarding experience.
         Here are simple tips to help beginners get started with growing plants and flowers:`,
      imageUrl: "/path/to/blo.jpg",
      fullDescription: [
        `1. Start Small and Simple: 
        Begin with a small garden or a few potted plants. 
        Choose easy-to-grow plants like marigolds, sunflowers, or herbs such as basil and mint.`,
        `2. Choose the Right Location: 
        Pick a spot with sufficient sunlight (most flowers and vegetables need at least 6 hours of sunlight daily). 
        Ensure the area has proper drainage to prevent waterlogging.`,
        `3. Test Your Soil: 
Check if your soil is rich and fertile. Add compost or organic matter to improve its quality.
Use soil testing kits to measure pH levels and nutrient content.`,
        `4. Water properly: Overwatering is a common mistake. Water your plants deeply, but not too often.
 The soil should be moist but not soggy.
 Check the top few inches of soil before watering to see if it needs it.`,
        `5. Use quality tools: Invest in good, basic gardening tools like a hand trowel, pruners, a watering can or hose, and gardening gloves.
       These tools make planting, weeding, and maintaining your garden easier.`,
        `6. Learn about your plants: Research the specific needs of the plants you are growing, such as how much water, sunlight, and space they require.
        Some plants need more attention than others.`]
    },

    {
      date: "07/04/2024",
      title: "Plant Care Basics",
      description:
        "Here’s a deeper dive into plants and some essential things you should know as a beginner:",
      imageUrl: "/path/to/blogs.jpg",
      fullDescription: [
        `1. Sunlight: Plants need sunlight to photosynthesize and grow. Most plants require 6–8 hours of sunlight per day,
         but some, like ferns or certain houseplants, thrive in lower light.`,
         `2. Watering: Most plants prefer a consistent watering schedule.
          Watering early in the morning is ideal as it gives the soil time to absorb moisture before the sun's heat dries it out.
          Always check soil moisture before watering to avoid overwatering.`,
          `3. Fertilizing: Plants need nutrients to grow. Fertilizers provide these essential elements (like nitrogen, phosphorus, and potassium).
           Some plants benefit from regular feeding, while others may only need it once or twice a year.`]
    },

    {
      date: "08/04/2024",
      title: "Types of Plants",
      description:
        "Type of plants with there life cycle",
      imageUrl: "/path/to/bl.jpg",
      fullDescription: [
        `1. Annuals: These plants complete their life cycle (grow, flower, seed, die) in one season. Examples include petunias, marigolds, and zinnias.
         They often bloom profusely and require replanting each year.`,
         `2. Perennials: These plants come back year after year. While they may not flower as abundantly as annuals,
          they are lower maintenance and establish deep root systems over time.
          Examples are lavender, hostas, and coneflowers.`,
          `3. Biennials: These plants take two years to complete their life cycle, usually flowering in their second year.
           Foxgloves and parsley are examples.`,
           `4. Houseplants: These can grow indoors and are usually low-maintenance, like spider plants, pothos, and snake plants.
            They can be great for beginners, especially if you have limited outdoor space.`,
            `5. Seeds: Starting from seeds can be rewarding and cost-effective, but it requires patience and some knowledge.
             Seeds need to be started indoors for a few weeks before the last frost date in colder climates, or they can be directly sown outdoors if the weather is warm enough.`] 
    },

    {
      date: "08/04/2024",
      title: " Seasonal Considerations",
      description:
        "what type of plants we have to grow in different seasons",
      imageUrl: "/path/to/bl.jpg",
      fullDescription: [
        `1. Spring: Ideal for planting annuals, perennials, and most vegetables.
         It’s a great time to start seeds indoors for the growing season.`,

         `2. Summer: Continue watering and monitoring for pests.
          Some plants may need extra shade or watering during the hottest months.`,

         `3. Fall: This is the best time to plant perennials, trees, and shrubs.
          It’s also a good time to start preparing your garden for winter by mulching.`,

          `4. Winter: Depending on your region, you might need to protect plants from frost or cold weather.
           Indoor houseplants should be placed in a location with adequate light and humidity.`
      
      ] },

      {
        date: "08/04/2024",
        title: " Planting Containers",
        description:
          `Planting containers are a great option for beginner gardeners, as they allow you to grow plants in small spaces.`,
        imageUrl: "/path/to/bl.jpg",
        fullDescription: [
          `Plastic Containers: Lightweight, inexpensive, and retain moisture well.`,
          `Concrete Containers: Heavy, durable, and excellent for large plants.`,
          `Hanging Baskets: Space-saving, ideal for trailing plants, requires frequent watering.`,
          `Wooden Containers: Natural look, great for larger plants, can rot over time.`,
          `Fabric Pots (Grow Bags): Lightweight, great drainage, promotes healthy root growth.`,
          `Metal Containers: Durable, stylish, but may overheat in direct sun.`,
          `Window Boxes: Perfect for small spaces, ideal for herbs and flowers.`,
        ] },

        {
          date: "08/04/2024",
          title: " Planting In Containers",
          description:
            `If you don’t have a garden bed, consider growing plants in containers or pots. You can grow a variety of vegetables, herbs, and flowers this way.
             Ensure your containers have proper drainage and use quality potting soil.`,
          imageUrl: "/path/to/bl.jpg",
          fullDescription: [
            `Container Garden Layout:
            You can arrange your containers in different ways depending on your space.
             For example, if you’re growing herbs, you might create a container herb garden.
             Or, for visual appeal, mix and match plants with varying heights, colors, and textures.`,
            `Vegetables: 
In containers, we can easily grow: Tomatoes, Lettuce, Carrots, Radishes, Peppers.`,
            `Herbs: 
In containers, we can easily grow: Basil, Mint, Rosemary, Parsley, Thyme.`,
            `Fruits: 
In containers, we can easily grow: Strawberries, Blueberries, Lemons, Raspberries, Fig Trees.`,
            `Flowers: 
In containers, we can easily grow: Petunias, Marigolds, Impatiens, Begonias, Geraniums.`,
            `Succulents & Cacti: 
In containers, we can easily grow: Aloe Vera, Echeveria, Jade Plant, Cactus, Sedum.`,
            `Vines & Climbers: 
In containers, we can easily grow: Morning Glories, Clematis, Sweet Peas, Grapevines, Scarlet Runner Beans.`,
            `Indoor Plants: 
In containers, we can easily grow: Snake Plant, ZZ Plant, Spider Plant, Pothos, Peace Lily.`,
            `Trees (Dwarf/Compact Varieties): 
In containers, we can easily grow: Dwarf Maple, Dwarf Citrus, Olive Trees, Figs, Japanese Maple.`,
          ] },
    // Add more blogs if needed
  ];

  const openModal = (blog: Blog) => {
    setCurrentBlog(blog);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent background scroll
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentBlog(null);
    document.body.style.overflow = ""; // Re-enable background scroll
  };

  return (
    <section className="min-h-screen p-8 bg-gradient-to-tl from-lime-300 via-slate-300 to-lime-200 ">
      <h2 className="text-center text-4xl font-semibold text-neutral-700 mb-8">
        From Our Blog
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-lime-200 to-green-200 rounded-lg shadow-md overflow-hidden border-2 border-teal-500"
          >
            <Image
              src={blog.imageUrl}
              alt={blog.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <p className="text-gray-500 text-sm mb-2">{blog.date}</p>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <button
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                onClick={() => openModal(blog)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal of blogs */}
      {isModalOpen && currentBlog && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <button
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-700"
              onClick={closeModal}
            > X </button>
          <div className="bg-gradient-to-r from-lime-200 to-green-200 p-8 rounded-lg w-3/4 md:w-1/2 max-h-[80vh] overflow-y-auto relative">

            <div className="flex flex-col items-center">
              <Image
                src={currentBlog.imageUrl}
                alt={currentBlog.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover rounded-md mb-4"
              />

              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {currentBlog.title}
              </h3>

              <div className="text-gray-700">
                {currentBlog.fullDescription.map((line, index) => (
                  <p key={index} className="mb-2">
                    {line}
                    <br />
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
