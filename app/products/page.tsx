"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";


interface Product {
  id: number;
  name: string;
  originalPrice: number;
  salePrice: number;
  imageUrl: string;
  isOnSale: boolean;
  category: string;
  size: string;
  description: string;
  family: string;
  colour: string;
}

// Sample product data with categories
const allProducts: Product[] = [
  { id: 1, name: "Auctor gravida enim", originalPrice: 100, salePrice: 80, imageUrl: "/path/to/images.jpg", isOnSale: false, size: "20 Inch", family: "red apple", colour: "green", category: "Indoor Plants", description: "This is a great piece of furniture." },
  { id: 2, name: "Auctor sem", originalPrice: 200, salePrice: 100, imageUrl: "/path/to/images.jpg", isOnSale: true, size: "10 Inch",family: "red apple", colour: "green", category: "Trees & Climbers", description: "An amazing electronics product.An amazing electronics product.An amazing electronics product.An amazing electronics product" },
  { id: 3, name: "Commodo dolor", originalPrice: 300, salePrice: 230, imageUrl: "/path/to/images.jpg", isOnSale: true, size: "16cm",family: "red apple", colour: "green", category: "Trees & Climbers", description: "Comfortable and stylish clothing." },
  { id: 4, name: "Auctor gravida enim", originalPrice: 400, salePrice: 320, imageUrl: "/path/to/med.jpg", isOnSale: true, size: "16cm",family: "red apple", colour: "green", category: "Fertilizers", description: "This is a great piece of furniture." },
  { id: 5, name: "Auctor sem", originalPrice: 500, salePrice: 360, imageUrl: "/path/to/images.jpg", isOnSale: true, size: "16cm",family: "red apple", colour: "green", category: "Vegitables", description: "An amazing electronics product." },
  { id: 6, name: "Commodo dolor", originalPrice: 600, salePrice: 520, imageUrl: "/path/to/med.jpg", isOnSale: true, size: "10cm",family: "red apple", colour: "green", category: "Fertilizers", description: "Comfortable and stylish clothing." },
  { id: 7, name: "Commodo dolor", originalPrice: 700, salePrice: 650, imageUrl: "/path/to/images.jpg", isOnSale: true, size: "16cm",family: "red apple", colour: "green", category: "Fruit Trees", description: "Comfortable and stylish clothing." },
  { id: 8, name: "Auctor gravida enim", originalPrice: 850, salePrice: 800, imageUrl: "/path/to/med.jpg", isOnSale: true, size: "16cm",family: "red apple", colour: "green", category: "Flowers", description: "This is a great piece of furniture." },
  { id: 9, name: "Auctor sem", originalPrice: 720, salePrice: 500, imageUrl: "/path/to/images.jpg", isOnSale: true, size: "16cm",family: "red apple", colour: "green", category: "Fruit Trees", description: "An amazing electronics product." },
  { id: 10, name: "Commodo dolor", originalPrice: 670, salePrice: 590, imageUrl: "/path/to/med.jpg", isOnSale: true, size: "10cm",family: "red apple", colour: "green", category: "Outdoor Plants", description: "Comfortable and stylish clothing." },
  { id: 11, name: "Commodo dolor", originalPrice: 350, salePrice: 250, imageUrl: "/path/to/seed.jpg", isOnSale: true, size: "10cm",family: "red apple", colour: "green", category: "Seeds", description: "Comfortable and stylish clothing." },
];

const ProductCard: React.FC<{ product: Product; onClick: () => void }> = ({ product, onClick }) => {

  const calculateDiscountPercentage = (originalPrice: number, salePrice: number) => {
    if (originalPrice > 0 && salePrice < originalPrice) {
      return Math.round(((originalPrice - salePrice) / originalPrice) * 100);
    }
    return 0;
  };

  const discountPercentage = calculateDiscountPercentage(product.originalPrice, product.salePrice);

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg relative cursor-pointer hover:bg-lime-100" onClick={onClick}>
      {product.isOnSale && (
        <>
          <div className="absolute top-2 left-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs px-2 py-1 rounded">
            SALE
          </div>
          <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
            {discountPercentage}% OFF
          </div>
        </>
      )}
      <Image src={product.imageUrl} alt={product.name} width={200} height={200} className="w-full h-48 object-cover rounded-md" />
      <h3 className="mt-4 text-center text-lg font-semibold">{product.name}</h3>
      <div className="flex justify-center items-center space-x-2 mt-2">
        {product.isOnSale ? (
          <>
            <span className="text-gray-400 line-through">Rs.{product.originalPrice.toFixed(2)}</span>
            <span className="text-green-700 font-bold">Rs.{product.salePrice.toFixed(2)}</span>
          </>
        ) : (
          <span className="text-green-700 font-bold">Rs.{product.originalPrice.toFixed(2)}</span>
        )}
      </div>
    </div>
  );
};

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [visibleCount, setVisibleCount] = useState(4);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  const categories = ["All categories", "Indoor Plants", "Outdoor Plants", "Flowers", "Fruit Trees", "Vegitables", "Air Purifying Plants", "Fertilizers", "Trees & Climbers", "Seeds"];

  const filteredProducts = selectedCategory === "All categories"
    ? allProducts
    : allProducts.filter((product) => product.category === selectedCategory);

  const handleToggleView = () => {
    setIsExpanded(!isExpanded);
    setVisibleCount(isExpanded ? 4 : filteredProducts.length);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setShowDropdown(false);
  };

  const openModal = (product: Product) => {
    setModalProduct(product);
  };

  const closeModal = () => {
    setModalProduct(null);
  };

  const handleBuyNow = () => {
    alert("Redirecting to the checkout page...");
  };

  const handleAddToCart = () => {
    alert("Product added to the cart!");
  };

  useEffect(() => {
    document.body.style.overflow = modalProduct ? "hidden" : "auto";
  }, [modalProduct]);

  return (
    <div className="container mx-auto p-6 bg-gradient-to-r from-lime-100 to-lime-200">
      <div className="relative mb-6 flex">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="px-4 py-2 bg-gradient-to-r from-emerald-400 to-emerald-800 text-white font-semibold rounded-lg"
        >
          {selectedCategory}
        </button>

        {showDropdown && (
          <div className="absolute top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            {categories.map((category) => (
              <button
                key={category}
                className={`block px-4 py-2 text-left w-full hover:bg-gray-100 ${
                  selectedCategory === category ? "font-bold text-blue-600" : ""
                }`}
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </button>
            ))}
          </div>
        )}
</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.slice(0, visibleCount).map((product) => (
          <ProductCard key={product.id} product={product} onClick={() => openModal(product)} />
        ))}
      </div>

      {filteredProducts.length > 4 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleToggleView}
            className="px-6 py-2  text-white font-semibold rounded-full bg-gradient-to-r from-amber-500 to-pink-500"
          >
            {isExpanded ? "View Less" : "View All"}
          </button>
        </div>
      )}

      {modalProduct && (
        //popup window
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-20 px-4 sm:px-0">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 px-2 py-1 bg-gradient-to-t from-red-500 to-red-300 text-white rounded-lg hover:bg-red-600"
              > Back </button>
          <div className="bg-white border-2 border-lime-500 p-4 sm:p-8 rounded-lg w-full lg:w-1/2 max-w-lg flex flex-col sm:flex-row relative">
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0 sm:mr-4 relative max-w-xs overflow-hidden bg-cover bg-no-repea">
              <Image src={modalProduct.imageUrl} alt={modalProduct.name} width={300} height={300} className="w-full h-48 sm:h-64 object-cover rounded-md transition duration-300 ease-in-out hover:scale-110" />
            </div>

            <div className="w-full sm:w-1/2 relative">
              <h2 className="text-xl font-semibold break-words max-w-full whitespace-normal">
                {modalProduct.name}
              </h2>
              <p><strong>Name:</strong> {modalProduct.name}</p>
              <p><strong>Type:</strong> {modalProduct.category}</p>
              <p><strong>Size:</strong> {modalProduct.size}</p>
              <p><strong>Price: </strong> 
                {modalProduct.isOnSale ? (
                  <>
                    <span className="text-gray-400 line-through">Rs.{modalProduct.originalPrice.toFixed(2)}</span>
                    <span className="text-green-700 font-bold pl-2">Rs.{modalProduct.salePrice.toFixed(2)}</span>
                  </>
                ) : (
                  <span className="text-green-700 font-bold">Rs.{modalProduct.originalPrice.toFixed(2)}</span>
                )}
              </p>
              
              <p><strong>Family: </strong>{modalProduct.family}</p>
              <p><strong>Colour: </strong>{modalProduct.colour}</p>
              <p><strong>Description: </strong> {modalProduct.description}</p>

              <div className="flex flex-col sm:flex-row justify-between mt-4 space-y-2 sm:space-y-0">
                <button
                  onClick={handleAddToCart}
                  className="w-full sm:w-auto px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Add to Cart</button>
                <button
                  onClick={handleBuyNow}
                  className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
