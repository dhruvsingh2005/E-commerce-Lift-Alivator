import React from 'react'
import { Link } from 'react-router-dom'
import { FaWhatsapp } from "react-icons/fa";

import { Phone, Mail, MapPin, Send   } from 'lucide-react'

const ContactSection = () => {
  return (
    <section className="py-24 bg-background-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1">
            <p className="text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-4">Get in Touch</p>
            <h2 className="serif-title text-5xl md:text-6xl text-white mb-8">Let's Discuss Your <br /><span className="text-primary italic">Vertical Vision.</span></h2>
            <p className="text-white/50 text-lg font-light leading-relaxed mb-12 max-w-md">
              Whether it's a private residence or a commercial landmark, we provide bespoke architectural solutions tailored to your needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-primary/20 rounded flex items-center justify-center text-primary">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Call Us</p>
                  <a href="tel:+917942829113" className="text-white font-medium hover:text-primary transition-colors block">+91 79428 29113</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-primary/20 rounded flex items-center justify-center text-primary">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Email Us</p>
                  <p className="text-white font-medium">concierge@winsumelift.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 lg:col-span-2">
                <div className="w-10 h-10 border border-primary/20 rounded flex items-center justify-center text-primary">
                  <MapPin size={18} />
                </div>

                <div className="w-full">
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Visit Studio</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=22.72718,75.92261"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium hover:text-primary transition-colors"
                  >
                    Winsume Tower, Landmark Area, Indore, M.P.
                  </a>

                  <div className="mt-10 flex justify-center">
                    <a
                      href="https://wa.me/917942829113"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-primary hover:bg-primary/80 text-background-dark font-semibold px-10 py-4 rounded-full transition duration-300 text-lg"
                    >
                     <FaWhatsapp size={26} />

                          WhatsApp
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>


          <div className="flex-1">
            <div className="glass-card border border-white/10 p-8 md:p-12 rounded-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-sm p-4 text-white focus:border-primary transition-all outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-sm p-4 text-white focus:border-primary transition-all outline-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Project Type</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-sm p-4 text-white/60 focus:border-primary transition-all outline-none appearance-none">
                    <option>Residential Villa</option>
                    <option>Commercial Complex</option>
                    <option>Industrial Lift</option>
                    <option>Maintenance Inquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Your Message</label>
                  <textarea rows="4" placeholder="How can we help you?" className="w-full bg-white/5 border border-white/10 rounded-sm p-4 text-white focus:border-primary transition-all outline-none resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-primary text-black py-4 font-bold text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-white transition-all shimmer-effect">
                  SEND INQUIRY <Send size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
