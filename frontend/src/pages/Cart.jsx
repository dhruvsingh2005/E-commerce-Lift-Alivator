import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const itemId in cartItems) {
        if (cartItems[itemId] > 0) {
          tempData.push({
            _id: itemId,
            quantity: cartItems[itemId]
          })
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  const totalAmount = cartData.reduce((acc, item) => {
    const product = products.find(p => p._id === item._id);
    return acc + (product ? product.price * item.quantity : 0);
  }, 0);

  return (
    <div className="pt-24 min-h-screen bg-background-dark">
      <section className="max-w-7xl mx-auto px-6 py-12">
        <header className="mb-12 border-b border-white/10 pb-8 flex justify-between items-end">
          <div>
            <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold block mb-4">Selection Summary</span>
            <h1 className="serif-title text-5xl text-white font-medium">Your <span className="italic text-primary/90">Inquiry List</span></h1>
          </div>
          <div className="text-right hidden sm:block">
            <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-1">Total Estimated Investment</p>
            <p className="text-primary text-3xl serif-title">{currency}{totalAmount.toLocaleString()}</p>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1 space-y-6">
            {cartData.map((item, index) => {
              const product = products.find(p => p._id === item._id);
              if (!product) return null;

              return (
                <div key={index} className="glass-card border border-white/10 p-6 rounded-sm flex gap-6 items-center group">
                  <div className="w-24 aspect-square rounded-sm overflow-hidden bg-neutral-900 border border-white/5">
                    <img src={product.image[0]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={product.name} />
                  </div>
                  <div className="flex-1">
                    <h3 className="serif-title text-xl text-white mb-1">{product.name}</h3>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest mb-3">Category: {product.category}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-white/10 rounded-sm">
                        <button onClick={() => updateQuantity(item._id, item.quantity - 1)} className="p-2 text-white/40 hover:text-white transition-colors">
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-xs text-white font-bold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item._id, item.quantity + 1)} className="p-2 text-white/40 hover:text-white transition-colors">
                          <Plus size={14} />
                        </button>
                      </div>
                      <button onClick={() => updateQuantity(item._id, 0)} className="text-white/20 hover:text-red-500 transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-primary text-lg serif-title">{currency}{(product.price * item.quantity).toLocaleString()}</p>
                    <p className="text-white/20 text-[9px] uppercase tracking-widest font-bold">Unit: {currency}{product.price.toLocaleString()}</p>
                  </div>
                </div>
              )
            })}

            {cartData.length === 0 && (
              <div className="py-20 text-center border-2 border-dashed border-white/5 rounded-sm">
                <p className="text-white/20 text-xl font-light mb-8">Your consultation list is empty.</p>
                <Link to="/collection" className="text-primary uppercase tracking-[0.3em] text-xs font-black hover:text-white transition-colors">Continue Browsing</Link>
              </div>
            )}
          </div>

          <div className="w-full lg:w-[380px]">
            <div className="glass-card border border-white/10 p-8 rounded-sm sticky top-32">
              <h4 className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-8 border-b border-white/5 pb-4">Estimated Proposal</h4>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-xs tracking-wider">
                  <span className="text-white/60">Subtotal</span>
                  <span className="text-white font-medium">{currency}{totalAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs tracking-wider">
                  <span className="text-white/60">Technical Fee</span>
                  <span className="text-white font-medium italic">Complimentary</span>
                </div>
                <div className="pt-4 border-t border-white/5 flex justify-between items-end">
                  <span className="text-primary text-[10px] uppercase tracking-widest font-black">Total Estimate</span>
                  <span className="text-primary text-2xl serif-title">{currency}{totalAmount.toLocaleString()}</span>
                </div>
              </div>
              <button 
                onClick={() => navigate('/place-order')}
                disabled={cartData.length === 0}
                className="w-full bg-primary text-black py-4 rounded-sm font-black uppercase tracking-[0.4em] text-[10px] flex items-center justify-center gap-3 hover:bg-white transition-all disabled:opacity-30 disabled:cursor-not-allowed shimmer-effect shadow-xl"
              >
                PROCEED TO QUOTE <ArrowRight size={14} />
              </button>
              <div className="mt-6 p-4 bg-white/5 border border-primary/20 rounded-sm">
                <p className="text-[9px] uppercase tracking-widest text-primary/80 leading-relaxed text-center font-manrope">
                  *This is a preliminary estimate. Final quotation will be provided after site inspection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cart
