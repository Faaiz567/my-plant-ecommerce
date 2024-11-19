'use client';
import Image from "next/image";

export default function ServicesPage() {
  return (
    <section className="min-h-screen p-12 flex flex-col items-center space-y-12 bg-gradient-to-tl from-lime-300 via-slate-300 to-lime-200">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Services</h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          Discover our top services designed to help you create a beautiful, thriving garden.
        </p>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center text-center space-y-4 ">
          <div className="rounded-full w-32 h-32 relative overflow-hidden">
            <Image 
              src="/path/to/images.jpg" 
              alt="Garden Care" 
              className="rounded-full" 
              layout="fill" 
              objectFit="cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 128px" 
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Garden Care</h3>
          <p className="text-gray-600">Our Garden Care section (Blog) offers expert tips and advice to help you nurture a healthy, beautiful garden year-round.</p>
        </div>

        <div className="flex flex-col items-center text-center space-y-4">
          <div className="rounded-full w-32 h-32 relative overflow-hidden">
            <Image 
              src="/path/to/images.jpg" 
              alt="Plant Renovation" 
              className="rounded-full" 
              layout="fill" 
              objectFit="cover" 
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 128px" 
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Plant Renovation</h3>
          <p className="text-gray-600">Our Plant Renovation section provides expert guidance on revitalizing and transforming your plants for a fresher, healthier look.</p>
        </div>

        <div className="flex flex-col items-center text-center space-y-4">
          <div className="rounded-full w-32 h-32 relative overflow-hidden">
            <Image 
              src="/path/to/images.jpg" 
              alt="Seed Supply" 
              className="rounded-full" 
              layout="fill" 
              objectFit="cover" 
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 128px" 
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Seed Supply</h3>
          <p className="text-gray-600">Our Seed Supply section offers a diverse range of premium seeds, providing everything you need to start and grow a vibrant garden.</p>
        </div>

        <div className="flex flex-col items-center text-center space-y-4">
          <div className="rounded-full w-32 h-32 relative overflow-hidden">
            <Image 
              src="/path/to/images.jpg" 
              alt="Watering Garden" 
              className="rounded-full" 
              layout="fill" 
              objectFit="cover" 
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 128px" 
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Watering Garden</h3>
          <p className="text-gray-600">Our Watering Garden section offers essential tips and techniques for effectively watering your plants, ensuring they thrive and flourish.</p>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="text-center mt-12">
        <h3 className="text-3xl font-bold text-gray-800 mb-2">Featured Products</h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our top trees, chosen for their beauty and resilience. Add color, fruit, or greenery to your garden with these customer favorites. Bring nature&rsquo;s charm home today.
        </p>
      </div>
    </section>
  );
}
