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
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/elevator.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* FIXED HERE: added pt-28 lg:pt-32 */}
        <div className="flex-1 flex flex-col lg:flex-row px-8 lg:px-16 pt-28 lg:pt-32 items-center relative z-10">

          <div className="w-full lg:w-[55%] flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 border border-primary/40 rounded-full px-4 py-1 w-fit">
              <span className="text-primary text-[10px]">●</span>
              <span className="text-[11px] uppercase tracking-widest text-primary/80">Est. 2018 · Indore, India</span>
            </div>

            <div className="flex flex-col space-y-[-1rem] pb-30">
              <span className="text-4xl md:text-5xl lg:text-[3.5rem] font-extralight tracking-tight leading-tight text-white">
                The Art of
              </span>

              <span className="text-5xl md:text-6xl lg:text-[4.25rem] font-serif italic text-primary py-2 ml-8 lg:ml-20 -my-4 relative z-10">
                Vertical
              </span>

              <span className="text-4xl md:text-5xl lg:text-[3.5rem] font-extralight tracking-tight text-white ml-[8rem] md:ml-[10rem] lg:ml-[13rem]">
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

            <div className="flex items-center gap-8 pt-6 border-t border-white/10 mt-4">
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

        
         

        </div>

      </section>

    

      <ContactSection />

    </div>
  )
}

export default Home