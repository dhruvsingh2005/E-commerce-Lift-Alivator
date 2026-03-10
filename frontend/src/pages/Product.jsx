import { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Info } from 'lucide-react';
import ContactSection from '../components/ContactSection';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
      return null;
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="pt-24 min-h-screen bg-background-dark">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Images */}
          <div className="flex-1">
            <div className="aspect-[4/5] overflow-hidden rounded-sm border border-white/10 bg-neutral-900 group">
              <img src={image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={productData.name} />
            </div>
            <div className="grid grid-cols-4 gap-4 mt-4">
              {productData.image.map((item, index) => (
                <div 
                  key={index} 
                  onClick={() => setImage(item)}
                  className={`aspect-square cursor-pointer border rounded-sm overflow-hidden transition-all ${image === item ? 'border-primary' : 'border-gray-200'}`}
                >
                  <img src={item} className="w-full h-full object-cover" alt="" />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 flex flex-col">
            <div className="mb-8">
              <span className="text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block font-manrope">{productData.category} SERIES</span>
              <h1 className="serif-title text-5xl md:text-6xl text-white mb-4">{productData.name}</h1>
              <div className="flex items-center gap-4 text-white/40 text-xs uppercase tracking-widest font-bold font-manrope">
                <span className="flex items-center gap-1 text-green-400"><ShieldCheck size={14} /> Certified BIS</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Zap size={14} /> Energy Class A+</span>
              </div>
            </div>

            <div className="mb-12">
              <p className="text-primary text-3xl serif-title mb-4">
                <span className="text-xs uppercase tracking-widest text-white/40 mr-3 font-manrope">Investment Starts At</span>
                {currency}{productData.price.toLocaleString()}
              </p>
              <p className="text-white/60 text-lg font-light leading-relaxed italic serif-title">
                "{productData.description}"
              </p>
            </div>

            <div className="space-y-8 mb-12">
              <div className="grid grid-cols-2 gap-px bg-white/5 border border-white/10">
                <div className="p-6">
                  <h4 className="text-white/40 text-[9px] uppercase tracking-widest font-bold mb-4 font-manrope">Technical Specs</h4>
                  <ul className="space-y-3">
                    {productData.features?.slice(0, 4).map((f, i) => (
                      <li key={i} className="text-white text-[11px] uppercase tracking-wider flex items-center gap-2 font-manrope">
                        <CheckCircle2 size={12} className="text-primary" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 border-l border-white/10">
                  <h4 className="text-white/40 text-[9px] uppercase tracking-widest font-bold mb-4 font-manrope">Build Quality</h4>
                  <ul className="space-y-3 text-white/40 text-[11px] uppercase tracking-wider font-manrope">
                    <li className="flex items-center gap-2"><CheckCircle2 size={12} /> Titanium Finish</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={12} /> German Traction</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={12} /> SMART-LIFT OS</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-auto flex flex-col gap-4">
              <button 
                onClick={() => addToCart(productData._id)}
                className="w-full bg-primary text-black py-6 rounded-sm font-black uppercase tracking-[0.4em] text-xs flex items-center justify-center gap-3 hover:bg-white transition-all shadow-2xl shimmer-effect">
                ADD TO CONSULTATION <ArrowRight size={16} />
              </button>
              <Link to="/contact" className="w-full border border-white/10 text-white/60 py-6 rounded-sm font-black uppercase tracking-[0.4em] text-xs flex items-center justify-center gap-3 hover:border-primary hover:text-primary transition-all">
                GET A CUSTOM QUOTE
              </Link>
              <p className="text-center mt-2 text-[10px] uppercase tracking-widest text-white/30 flex items-center justify-center gap-2 font-manrope">
                <Info size={12} /> Personalized architectural consultation included.
              </p>
            </div>
          </div>
        </div>

        {/* Extended Specs */}
        <section className="mt-32 border-t border-white/10 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="serif-title text-4xl text-white mb-6">Unrivaled <br /><span className="text-primary italic">Specifications</span></h2>
              <p className="text-white/50 text-sm leading-loose font-manrope">
                Engineered for those who demand the zenith of performance. Every specification is a testament to our pursuit of vertical perfection.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {productData.specifications && Object.entries(productData.specifications).map(([key, value]) => (
                  <div key={key} className="border-b border-white/5 pb-4">
                    <p className="text-primary/60 text-[10px] font-bold uppercase tracking-widest mb-1 font-manrope">{key}</p>
                    <p className="text-white text-lg font-medium tracking-wide font-manrope">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <ContactSection />
      </div>
    </div>
  ) : <div className="min-h-screen bg-background-dark pt-24 text-center text-white/20">Archiving Data...</div>
}

export default Product
