import React, { useContext, useEffect, useState, useRef } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";
import ContactSection from "../components/ContactSection";
import { ChevronDown } from "lucide-react";

const Collection = () => {
    {/* ... other code remains same ... */}
  const { products, search, showSearch } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState("all");
  const dropdownRef = useRef(null);

  const categories = ["All", "Residential", "Commercial", "Hospitality", "Industrial", "Goods"];
  
  const priceRanges = [
    { label: 'All Prices', value: 'all', min: 0, max: Infinity },
    { label: '₹0 - ₹25,000', value: '0-25000', min: 0, max: 25000 },
    { label: '₹25,000 - ₹50,000', value: '25000-50000', min: 25000, max: 50000 },
    { label: '₹50,000 - ₹1,00,000', value: '50000-100000', min: 50000, max: 100000 },
    { label: '₹1,00,000 - ₹3,00,000', value: '100000-300000', min: 100000, max: 300000 },
    { label: '₹3,00,000 - ₹5,00,000', value: '300000-500000', min: 300000, max: 500000 },
    { label: '₹5,00,000 - ₹10,00,000', value: '500000-1000000', min: 500000, max: 1000000 },
    { label: '₹10,00,000 - ₹25,00,000', value: '1000000-2500000', min: 1000000, max: 2500000 },
    { label: '₹25,00,000 - ₹50,00,000', value: '2500000-5000000', min: 2500000, max: 5000000 },
    { label: '₹50,00,000+', value: '5000000+', min: 5000000, max: Infinity }
  ];

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

    // Apply price filter
    const priceRange = priceRanges.find(range => range.value === selectedPrice);
    if (priceRange) {
      productsCopy = productsCopy.filter((item) => 
        item.price >= priceRange.min && item.price <= priceRange.max
      );
    }

    setFilterProducts(productsCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [category, products, search, showSearch, selectedPrice]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    if (openDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [openDropdown]);

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen pt-24">
      {/* Header */}
      <header className="relative bg-background-dark border-b border-white/10 px-6 lg:px-20 py-24 text-center overflow-visible">
        <div className="absolute inset-0 flex items-center justify-center opacity-10 select-none pointer-events-none">
          <span className="text-[320px] font-black text-primary leading-none">02</span>
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">Our Collection</p>
          <h2 className="serif-title text-5xl md:text-7xl font-light text-white mb-12">Elevators & Lifts</h2>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-12 mt-4 relative z-20">
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
            
            {/* Price Filter Dropdown */}
            <div className="relative z-50" ref={dropdownRef}>
              <button
                onClick={() => setOpenDropdown(openDropdown === 'price' ? null : 'price')}
                className="flex items-center gap-2 pb-2 text-sm font-bold text-white/40 hover:text-white transition-all"
              >
                <span>Price</span>
                <ChevronDown size={14} className={`transition-transform ${openDropdown === 'price' ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdown === 'price' && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-obsidian border border-primary/30 rounded shadow-2xl z-50 min-w-64 max-h-96 overflow-y-auto">
                  {priceRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => {
                        setSelectedPrice(range.value);
                        setOpenDropdown(null);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors border-b border-white/5 last:border-b-0 ${
                        selectedPrice === range.value
                          ? 'bg-primary/20 text-white font-bold'
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
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
