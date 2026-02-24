import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ProductItem = ({ id, image, name, price, category, features }) => {
  const { currency } = useContext(ShopContext);
  const imageUrl = Array.isArray(image) && image.length > 0 ? image[0] : "";

  return (
    <Link to={`/product/${id}`} className="group relative flex flex-col h-full bg-obsidian border border-white/10 hover:border-primary/50 transition-all duration-500 overflow-hidden">
      <div className="relative aspect-[3/4] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 z-10 transition-colors"></div>
        <img
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          src={imageUrl}
          alt={name || "Product"}
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-primary/95 text-black text-[9px] font-black px-3 py-1 uppercase tracking-widest rounded-sm">
            {category}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="flex items-center justify-between text-white border-t border-white/20 pt-4">
            <span className="text-[10px] uppercase font-bold tracking-widest">View Details</span>
            <ArrowRight size={14} className="text-primary" />
          </div>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-1">
        <h3 className="serif-title text-2xl text-white mb-4 group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        {features && features.length > 0 && (
          <ul className="mb-8 flex flex-col gap-2">
            {features.slice(0, 3).map((feature, i) => (
              <li key={i} className="text-white/40 text-[11px] uppercase tracking-wider flex items-center gap-2">
                <span className="w-1 H-1 bg-primary rounded-full"></span>
                {feature}
              </li>
            ))}
          </ul>
        )}
        
        <div className="mt-auto pt-4 border-t border-white/5 flex flex-col">
          <p className="pt-4 pb-1 text-xs text-white/40 uppercase tracking-widest font-manrope">{name}</p>
          <div className="flex justify-between items-center pr-2">
            <p className="text-sm font-black text-primary font-manrope">{currency}{(price != null ? price : 0).toLocaleString()}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
