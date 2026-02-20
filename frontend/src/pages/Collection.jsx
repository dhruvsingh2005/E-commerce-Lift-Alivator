import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";
import ContactSection from "../components/ContactSection";

const Collection = () => {
    {/* ... other code remains same ... */}
  const { products, search, showSearch } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState("All");

  const categories = ["All", "Residential", "Commercial", "Hospitality", "Industrial", "Goods"];

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "All") {
      productsCopy = productsCopy.filter((item) => item.category === category);
    }

    setFilterProducts(productsCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [category, products, search, showSearch]);

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen pt-24">
      {/* Header */}
      <header className="relative bg-background-dark border-b border-white/10 px-6 lg:px-20 py-24 text-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-10 select-none pointer-events-none">
          <span className="text-[320px] font-black text-primary leading-none">02</span>
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">Our Collection</p>
          <h2 className="serif-title text-5xl md:text-7xl font-light text-white mb-12">Elevators & Lifts</h2>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-12 mt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`pb-2 text-sm font-bold transition-all ${
                  category === cat
                    ? "text-white border-b-2 border-primary"
                    : "text-white/40 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Product Grid */}
      <main className="py-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
                category={item.category}
                features={item.features}
              />
            ))}
          </div>
          {filterProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/40 text-xl font-light">No products found in this category.</p>
            </div>
          )}
        </div>
      </main>
      <ContactSection />
    </div>
  );
};

export default Collection;
