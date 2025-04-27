import React, { useState } from 'react';

const Main = () => {
  const images = [
    '../images/img11.jpg',
    '../images/img22.jpg',
    '../images/img33.jpg',
    '../images/img44.jpg',
  ];

  const [mainImage, setMainImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  return (
    <div className="max-w-7xl mx-auto mt-32 flex flex-wrap gap-20 justify-center px-4">
      
      {/* Left Side: Images */}
      <div className="flex flex-col items-center gap-6">
        
        {/* Main Image */}
        <div className="w-[400px] h-[400px] rounded-xl overflow-hidden">
          <img
            src={mainImage}
            alt="Main Product"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Thumbnail Images */}
        <div className="flex gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setMainImage(img)}
              className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                mainImage === img ? 'border-orange-500' : 'border-transparent'
              } cursor-pointer`}
            >
              <img
                src={img}
                alt={`Thumbnail ${index}`}
                className="w-full h-full object-cover hover:opacity-80"
              />
            </div>
          ))}
        </div>

      </div>

      {/* Right Side: Product Info */}
      <div className="flex flex-col mt-10 gap-6 max-w-xl">
        <h2 className="font-bold text-gray-400 text-xl">Sneaker Company</h2>

        <h1 className="font-bold text-4xl leading-tight">
          Fall Limited Edition <br /> Sneakers
        </h1>

        <p className="text-gray-500 text-lg font-light">
          These low-profile sneakers are perfect casual wear companions. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
        </p>

        <div className="flex items-center gap-4">
          <h2 className="font-bold text-3xl">$125.00</h2>
          <span className="bg-black text-white text-sm font-bold py-1 px-3 rounded-xl">
            50%
          </span>
        </div>

        <p className="text-gray-400 text-lg line-through">$250.00</p>

        {/* Counter and Add to Cart */}
        <div className="flex items-center gap-4 mt-4">
          {/* Counter */}
          <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden">
            <button onClick={handleDecrement} className="px-4 py-2 text-2xl font-bold text-gray-700 hover:bg-gray-200">-</button>
            <span className="px-6 py-2 text-xl">{quantity}</span>
            <button onClick={handleIncrement} className="px-4 py-2 text-2xl font-bold text-gray-700 hover:bg-gray-200">+</button>
          </div>

          {/* Add to Cart */}
          <button className="bg-orange-500 w-1/2 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default Main;
