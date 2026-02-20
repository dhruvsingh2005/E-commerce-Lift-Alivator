import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, Star, Users, Briefcase, Settings, Construction } from 'lucide-react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from '../components/ProductItem'
import ContactSection from '../components/ContactSection'

const Home = () => {
  const { products, projects, currency } = useContext(ShopContext);

  // Take top 4 elevators for home display
  const featuredElevators = products.slice(0, 4);

  return (
    <div className='flex flex-col pb-20'>
      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCs9FdesHnmX024xTO3sVRLoChUARVMNMFKcpPDPHkyH5HSECfJAIP4HjbB6AOC12T356VJMujRyE-V4x3eAtUZlnR50EP_vo_qp7__qoAFG5_bd4KHC_NXyDDApS93Vk1CeumhvtwwqK1Bd9UCYY0n-sbeK8tpVx9rfPcj1JPzbLWpf2zNr0iZX3J18hpfc2GdSpMpdM8bY0XXxroVxAsSErdadCLSYFSedcJ5tUU-cn2_9w-cLJNKMhSUGXXsyJPCbLWn9vDUhJ-7')" }}>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* FIXED HERE: added pt-28 lg:pt-32 */}
        <div className="flex-1 flex flex-col lg:flex-row px-8 lg:px-16 pt-28 lg:pt-32 items-center relative z-10">

          <div className="w-full lg:w-[55%] flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 border border-primary/40 rounded-full px-4 py-1 w-fit">
              <span className="text-primary text-[10px]">●</span>
              <span className="text-[11px] uppercase tracking-widest text-primary/80">Est. 2018 · Indore, India</span>
            </div>

            <div className="flex flex-col space-y-[-1rem] pb-30">
              <span className="text-6xl md:text-7xl lg:text-[5.5rem] font-extralight tracking-tight leading-tight text-white">
                The Art of
              </span>

              <span className="text-7xl md:text-8xl lg:text-[7.5rem] font-serif italic text-primary py-2 ml-8 lg:ml-20 -my-4 relative z-10">
                Vertical
              </span>

              <span className="text-6xl md:text-7xl lg:text-[5.5rem] font-extralight tracking-tight self-end lg:mr-12 text-white">
                Mastery.
              </span>
            </div>

            <p className="max-w-md text-white/60 text-lg font-light leading-relaxed font-manrope">
              Precision-crafted elevators for India's most distinguished residential and commercial spaces.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <Link to="/collection" className="bg-primary text-black px-8 py-4 font-bold text-sm tracking-widest flex items-center gap-2 hover:bg-white transition-all shimmer-effect">
                EXPLORE COLLECTION <ArrowRight size={16} />
              </Link>

              <Link to="/portfolio" className="border border-white/20 text-white hover:border-primary px-8 py-4 font-bold text-sm tracking-widest transition-all">
                VIEW PROJECTS
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-12 border-t border-white/10 mt-8">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">200+</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">Projects</span>
              </div>

              <div className="h-8 w-px bg-primary/30"></div>

              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">15+</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">Cities</span>
              </div>

              <div className="h-8 w-px bg-primary/30"></div>

              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">6 Yrs</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">Experience</span>
              </div>

              <div className="h-8 w-px bg-primary/30"></div>

              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">98%</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">Satisfaction</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE stays SAME */}
          <div className="relative w-full lg:w-[45%] h-full flex items-center justify-center pt-20 lg:pt-0">

            <div className="relative z-10 w-full max-w-md aspect-[3/4] rounded-lg overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl">

              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs9FdesHnmX024xTO3sVRLoChUARVMNMFKcpPDPHkyH5HSECfJAIP4HjbB6AOC12T356VJMujRyE-V4x3eAtUZlnR50EP_vo_qp7__qoAFG5_bd4KHC_NXyDDApS93Vk1CeumhvtwwqK1Bd9UCYY0n-sbeK8tpVx9rfPcj1JPzbLWpf2zNr0iZX3J18hpfc2GdSpMpdM8bY0XXxroVxAsSErdadCLSYFSedcJ5tUU-cn2_9w-cLJNKMhSUGXXsyJPCbLWn9vDUhJ-7"
                alt="Luxury elevator interior"
                className="w-full h-full object-cover opacity-80"
              />

              <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-black/80 border border-primary/40 px-4 py-1 rounded">
                <span className="font-manrope font-bold text-primary text-xl tracking-tighter">PH</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* REST OF YOUR CODE REMAINS EXACT SAME */}

      <ContactSection />

    </div>
  )
}

export default Home