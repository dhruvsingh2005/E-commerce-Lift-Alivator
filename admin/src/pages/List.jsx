import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { Trash2, ExternalLink, Box } from "lucide-react";

const List = ({ token }) => {
  const [listProducts, setListProducts] = useState([]);

  const fetchListProducts = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setListProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      if(!confirm("Are you sure you want to decommission this architecture?")) return;
      
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success("Architecture Decommissioned");
        await fetchListProducts();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchListProducts();
  }, []);

  return (
    <div className="animation-fadeIn">
      <div className="mb-10 flex justify-between items-end">
        <div>
          <p className="text-primary text-[10px] uppercase tracking-[0.4em] font-black mb-3">Inventory Dashboard</p>
          <h2 className="serif-title text-4xl text-white">Registry <span className="italic text-primary/80">List</span></h2>
        </div>
        <div className="text-right">
          <p className="text-white/20 text-[9px] uppercase tracking-widest font-black mb-1">Active Assets</p>
          <p className="text-white text-2xl font-light">{listProducts.length}</p>
        </div>
      </div>

      <div className="glass-card border border-white/10 rounded-sm overflow-hidden">
        {/* Table Header */}
        <div className="hidden md:grid grid-cols-[0.8fr_2fr_1fr_1.2fr_0.5fr] items-center py-6 px-8 border-b border-white/10 bg-white/[0.02] text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
          <span>Asset Preview</span>
          <span>Architectural Identity</span>
          <span>Classification</span>
          <span>Investment Scale</span>
          <span className="text-center">Protocol</span>
        </div>
        
        {/* Table Body */}
        <div className="divide-y divide-white/5">
          {listProducts.map((item, index) => (
            <div
              className="grid grid-cols-1 md:grid-cols-[0.8fr_2fr_1fr_1.2fr_0.5fr] items-center gap-6 py-6 px-8 hover:bg-white/[0.02] transition-colors group"
              key={index}
            >
              <div className="relative w-20 h-20 overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={item.image[0]} alt={item.name} />
              </div>

              <div>
                <p className="text-white font-bold text-sm tracking-wide mb-1 flex items-center gap-2">
                  {item.name}
                  {item.bestSeller && <span className="text-[8px] bg-primary/20 text-primary px-2 py-0.5 rounded-full tracking-widest">PRESTIGE</span>}
                </p>
                <p className="text-[10px] text-white/40 line-clamp-1 italic font-manrope">{item.description}</p>
              </div>

              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/60 bg-white/5 px-3 py-1 border border-white/10 rounded-sm">
                  {item.category}
                </span>
              </div>

              <div>
                <p className="text-primary font-bold text-base serif-title">{currency(item.price)}</p>
                <p className="text-[8px] text-white/20 uppercase tracking-widest font-black">Starting Valuation</p>
              </div>

              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => removeProduct(item._id)}
                  className="w-10 h-10 flex items-center justify-center text-white/30 hover:text-red-500 hover:bg-red-500/5 border border-white/5 hover:border-red-500/30 transition-all rounded-sm"
                  title="Decommission Asset"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}

          {listProducts.length === 0 && (
            <div className="text-center py-32 bg-obsidian/20">
              <Box className="mx-auto text-white/10 mb-4" size={48} />
              <p className="text-white/20 italic serif-title text-xl">The registry is currently vacant.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

List.propTypes = {
  token: PropTypes.string.isRequired
};

export default List;
