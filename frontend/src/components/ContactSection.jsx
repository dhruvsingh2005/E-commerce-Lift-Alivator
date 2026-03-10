import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaWhatsapp } from "react-icons/fa";
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { ShopContext } from '../context/ShopContext'

const ContactSection = () => {

  const { backendUrl, token, navigate } = useContext(ShopContext);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const [elevatorType, setElevatorType] = useState('Residential Villa')
  const [message, setMessage] = useState('')

  // Mobile number validation: Only numbers and max 10 digits
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); 
    if (value.length <= 10) {
      setPhone(value);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!token) {
      toast.error("Please Login First to send an inquiry");
      setTimeout(() => {
        navigate('/login');
      }, 2000);
      return;
    }

    if (phone.length !== 10) {
      toast.error("Mobile number must be exactly 10 digits");
      return;
    }

    try {
      const response = await axios.post(backendUrl + '/api/inquiry/add', 
        { name, email, phone, city, elevatorType, message },
        { headers: { token } } 
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setName(''); setEmail(''); setPhone('');
        setCity(''); setMessage('');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  }

  return (
    <section className="py-24 bg-[#1A1A1A] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[rgba(255,255,255,0.03)] rounded-full blur-[120px] -mr-64 -mt-64"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Side: Contact Info */}
          <div className="flex-1">
            <p className="text-[#C2410C] text-[12px] font-bold uppercase tracking-[0.4em] mb-4">
              Get in Touch
            </p>
            <h2 className="serif-title text-5xl md:text-6xl text-white mb-8">
              Let's Discuss Your <br />
              <span className="text-[#F26522] italic">Vertical Vision.</span>
            </h2>
            <p className="text-white/50 text-lg font-light leading-relaxed mb-12 max-w-md">
              Whether it's a private residence or a commercial landmark, we provide bespoke architectural solutions tailored to your needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Call Us Section */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#F26522]/40 rounded flex items-center justify-center text-[#F26522] bg-white/5">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Call Us</p>
                  <a href="tel:+917942829113" className="text-white font-medium hover:text-[#F26522] transition-colors block">+91 79428 29113</a>
                </div>
              </div>

              {/* Email Us Section */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#F26522]/40 rounded flex items-center justify-center text-[#F26522] bg-white/5">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Email Us</p>
                  <p className="text-white font-medium">concierge@winsumelift.com</p>
                </div>
              </div>

              {/* Visit Studio Section */}
              <div className="flex items-start gap-4 lg:col-span-2">
                <div className="w-10 h-10 border border-[#F26522]/40 rounded flex items-center justify-center text-[#F26522] bg-white/5">
                  <MapPin size={18} />
                </div>
                <div className="w-full">
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Visit Studio</p>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-[#F26522] transition-colors">
                    Winsume Tower, Landmark Area, Indore, M.P.
                  </a>
                  <div className="mt-10 flex justify-start">
                    <a href="https://wa.me/917942829113" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#F26522] hover:bg-[#ff7a3a] text-white font-semibold px-10 py-4 rounded-full transition duration-300 text-lg shadow-lg shadow-black/30">
                      <FaWhatsapp size={26} /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="flex-1">
            <div className="bg-[#1F2933] border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl">
              <form onSubmit={onSubmitHandler} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white font-bold ml-1">Full Name</label>
                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-sm p-4 text-white placeholder-white/60 focus:border-[#F26522] transition-all outline-none" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white font-bold ml-1">Email Address</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-sm p-4 text-white placeholder-white/60 focus:border-[#F26522] transition-all outline-none" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white font-bold ml-1">Phone Number</label>
                    <input onChange={handlePhoneChange} value={phone} type="tel" placeholder="0000000000" className="w-full bg-white/5 border border-white/10 rounded-sm p-4 text-white placeholder-white/60 focus:border-[#F26522] transition-all outline-none" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white font-bold ml-1">City</label>
                    <input onChange={(e) => setCity(e.target.value)} value={city} type="text" placeholder="Indore" className="w-full bg-white/5 border border-white/10 rounded-sm p-4 text-white placeholder-white/60 focus:border-[#F26522] transition-all outline-none" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white font-bold ml-1">Project Type</label>
                  <select onChange={(e) => setElevatorType(e.target.value)} value={elevatorType} className="w-full bg-white/5 text-white border border-white/10 rounded-sm p-4 focus:border-[#F26522] transition-all outline-none appearance-none">
                    <option className='bg-[#1F2933]'>Residential Villa</option>
                    <option className='bg-[#1F2933]'>Commercial Complex</option>
                    <option className='bg-[#1F2933]'>Industrial Lift</option>
                    <option className='bg-[#1F2933]'>Maintenance Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white font-bold ml-1">Your Message</label>
                  <textarea onChange={(e) => setMessage(e.target.value)} value={message} rows="4" placeholder="How can we help you?" className="w-full bg-white/5 border border-white/10 rounded-sm p-4 text-white placeholder-white/60 focus:border-[#F26522] transition-all outline-none resize-none"></textarea>
                </div>
                
                <button type="submit" className="w-full bg-[#F26522] text-white py-4 font-bold text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-white hover:text-[#F26522] transition-all shadow-lg">
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