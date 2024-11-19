// app/page.tsx
import ProductPage from "./products/page"; 

export default function LandingPage() {
  return (
    <div className="min-h-screen text-white sm:text-"
      style={{
        backgroundImage: 'url(/path/to/back.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Welcome Section */}
      <div className="h-screen flex flex-col items-center justify-center bg-opacity-50 bg-black">
        <h1 className="text-4xl font-bold bg-gradient-to-t from-green-300 to-amber-200 bg-clip-text text-transparent">
          Welcome to Our Plants & Flowers Shop</h1>
        <p className="mt-4 text-lg bg-gradient-to-r from-green-200 to-yellow-200 bg-clip-text text-transparent"
        >Explore our beautiful selection of plants and flowers.</p>
      </div>

      {/* Product List Section */}
      <div className="bg-gradient-to-tl from-yellow-300 via-zinc-700 to-lime-300 text-black py-">
        <div className="container mx-auto p-6 bg-gradient-to-r from-lime-100 to-lime-200">
          <ProductPage /> {/* Render the ProductPage component here */}
        </div>
      </div>
    </div>
  );
}
